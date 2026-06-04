from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path


def health_check(_request):
    return JsonResponse({"status": "ok", "service": "ai-image-tool-api"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health_check, name="health-check"),
    path("api/companies/", include("apps.companies.urls")),
    path("api/employees/", include("apps.employees.urls")),
    path("api/templates/", include("apps.templates.urls")),
    path("api/cards/", include("apps.cards.urls")),
]
