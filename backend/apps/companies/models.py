from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=160)
    logo = models.ImageField(upload_to="company-logos/", blank=True, null=True)
    brand_color = models.CharField(max_length=24, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
