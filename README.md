# 1Quantum-Developers API

Minimal Express API scaffold.

Getting started:

1. Copy .env.example to .env and adjust variables.
2. Install dependencies:
   npm install
3. Run locally:
   npm run dev
4. Start production:
   npm start
5. Build image:
   docker build -t 1quantum-api .

Routes:
- GET /api/health - health check
- GET / - root info

CI: A simple GitHub Actions workflow is included at .github/workflows/nodejs.yml

Next steps / suggestions:
- Add tests (Jest or similar)
- Add request validation and structured logging
- Integrate with Auth repo for authentication / authorization
- Add database connections and migrations
