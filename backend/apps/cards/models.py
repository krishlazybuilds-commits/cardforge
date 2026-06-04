from django.db import models


class GeneratedCard(models.Model):
    company = models.ForeignKey(
        "companies.Company",
        on_delete=models.CASCADE,
        related_name="generated_cards",
    )
    employee = models.ForeignKey(
        "employees.Employee",
        on_delete=models.SET_NULL,
        related_name="generated_cards",
        blank=True,
        null=True,
    )
    template = models.ForeignKey(
        "templates.CardTemplate",
        on_delete=models.SET_NULL,
        related_name="generated_cards",
        blank=True,
        null=True,
    )
    title = models.CharField(max_length=160)
    message = models.TextField(blank=True)
    output_image = models.ImageField(upload_to="generated-cards/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title
