export default {
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
  },
  server: {
    port: 3000,
    open: true
  }
}