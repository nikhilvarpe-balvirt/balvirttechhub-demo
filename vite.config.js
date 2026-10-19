import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Runs the real /api/contact.js serverless function inside the Vite dev server,
// so `npm run dev` can exercise the exact same SendGrid code path Vercel runs in
// production — no `vercel dev` / Vercel account needed for local testing.
function localApiPlugin(env) {
  return {
    name: 'local-api-contact',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        let body = ''
        for await (const chunk of req) body += chunk
        try {
          req.body = body ? JSON.parse(body) : {}
        } catch {
          req.body = {}
        }

        // Vercel's handler expects res.status(code).json(data); polyfill that here.
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }

        // Local dev doesn't get env vars injected the way Vercel does — apply them here.
        for (const key of ['SENDGRID_API_KEY', 'SENDGRID_FROM_EMAIL', 'SENDGRID_FROM_NAME', 'CONTACT_TO_EMAIL']) {
          if (env[key]) process.env[key] = env[key]
        }

        const { default: handler } = await server.ssrLoadModule('/api/contact.js')
        await handler(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), localApiPlugin(env)],
  }
})
