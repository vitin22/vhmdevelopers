# --- ETAPA 1: Instalación de dependencias ---
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiamos solo los archivos de dependencias para aprovechar el caché de Docker
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "No lockfile found." && exit 1; \
  fi

# --- ETAPA 2: Construcción (Build) ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos las dependencias instaladas en la etapa anterior
COPY --from=deps /app/node_modules ./node_modules

# ¡IMPORTANTE!: Copiamos TODO el proyecto. 
# Esto incluye app/, components/, hooks/, tsconfig.json, etc.
COPY . .

# Desactivamos telemetría de Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Ejecutamos el build (esto usa tu tsconfig.json y resuelve los @/*)
RUN npm run build

# --- ETAPA 3: Imagen de Ejecución (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Seguridad: Creamos un usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiamos la carpeta pública y el output standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

# El comando para iniciar la app en modo standalone
CMD ["node", "server.js"]