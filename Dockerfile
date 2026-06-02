# Etapa 1: Dependencias
FROM node:22-alpine AS deps
# Se necesita libc6-compat para algunas dependencias de node en Alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de definición de paquetes
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Instalar dependencias detectando el package manager
RUN \
  if [ -f package-lock.json ]; then npm install; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Etapa 2: Builder
FROM node:22-alpine AS builder
WORKDIR /app
# Reutilizamos las dependencias
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables de entorno para el build
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

# Etapa 3: Runner (Imagen de producción)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crear usuario de sistema para mayor seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos públicos y la carpeta estática
COPY --from=builder /app/public ./public

# Configurar permisos para la caché de prerenderizado
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar el output standalone (requiere output: 'standalone' en next.config.js)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# El archivo server.js es generado automáticamente por el modo standalone
CMD ["node", "server.js"]