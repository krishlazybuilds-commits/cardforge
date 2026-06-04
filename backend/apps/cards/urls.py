from django.http import JsonResponse
from django.urls import path


def index(_request):
    return JsonResponse({"resource": "cards", "status": "ready"})


urlpatterns = [
    path("", index, name="cards-index"),
]
