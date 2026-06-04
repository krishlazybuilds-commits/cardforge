from django.http import JsonResponse
from django.urls import path


def index(_request):
    return JsonResponse({"resource": "employees", "status": "ready"})


urlpatterns = [
    path("", index, name="employees-index"),
]
