# AI Image Tool

Corporate greeting card generator with a Next.js frontend and Django backend.

## Project structure

```text
.
├── backend/      Django + Django REST Framework API
├── frontend/     Next.js landing/app frontend
└── MRD.md        Market requirements document
```

## Frontend

```bash
cd frontend
npm run dev
```

Open `http://localhost:3000`.

## Backend

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

API starts at `http://localhost:8000`.
