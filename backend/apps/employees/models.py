from django.db import models


class Employee(models.Model):
    company = models.ForeignKey(
        "companies.Company",
        on_delete=models.CASCADE,
        related_name="employees",
    )
    full_name = models.CharField(max_length=160)
    designation = models.CharField(max_length=160, blank=True)
    department = models.CharField(max_length=160, blank=True)
    photo = models.ImageField(upload_to="employee-photos/", blank=True, null=True)
    archived_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.full_name
