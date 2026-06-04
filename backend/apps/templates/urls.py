from django.http import JsonResponse
from django.urls import path


def index(_request):
    return JsonResponse({"resource": "templates", "status": "ready"})


urlpatterns = [
    path("", index, name="templates-index"),
]
