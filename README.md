# AranguriBackend — API REST de Instrumentos Musicales

API RESTful para el marketplace **InstrumentHub**. Construida con Node.js, Express 5, TypeScript y Supabase.

---

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/instrumentos` | Listar todos |
| `GET` | `/api/instrumentos/:id` | Obtener uno |
| `POST` | `/api/instrumentos` | Crear |
| `PATCH` | `/api/instrumentos/:id` | Actualizar |
| `DELETE` | `/api/instrumentos/:id` | Eliminar |

## Stack

- Node.js + Express 5
- TypeScript 6
- Supabase (PostgreSQL)
- ts-node-dev (desarrollo)

## Desarrollo local

```bash
cp .env.example .env   # Completar SUPABASE_URL y SUPABASE_KEY
npm install
npm run dev             # http://localhost:3000
```

## Deploy (Render)

1. Conectar repo de GitHub
2. Build: `npm install && npm run build`
3. Start: `npm start`
4. Variables de entorno: `SUPABASE_URL`, `SUPABASE_KEY`, `PORT`
