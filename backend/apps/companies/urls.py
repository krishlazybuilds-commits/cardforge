from django.http import JsonResponse
from django.urls import path


def index(_request):
    return JsonResponse({"resource": "companies", "status": "ready"})


urlpatterns = [
    path("", index, name="companies-index"),
]
