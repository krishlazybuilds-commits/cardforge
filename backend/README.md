# Backend

Django API skeleton for the AI Image Tool.

Current domain folders:

- `apps/companies` - company workspaces and brand settings
- `apps/employees` - employee profiles and photos
- `apps/templates` - reusable card templates and placeholders
- `apps/cards` - card generation history and export records

Run locally:

```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
