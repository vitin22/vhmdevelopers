export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Built with care
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
