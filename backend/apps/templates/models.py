from django.db import models


class CardTemplate(models.Model):
    class EventType(models.TextChoices):
        BIRTHDAY = "birthday", "Birthday"
        EOM = "eom", "Employee of the Month"
        ANNIVERSARY = "anniversary", "Work Anniversary"
        WELCOME = "welcome", "Welcome"
        CUSTOM = "custom", "Custom"

    company = models.ForeignKey(
        "companies.Company",
        on_delete=models.CASCADE,
        related_name="templates",
    )
    name = models.CharField(max_length=160)
    event_type = models.CharField(max_length=32, choices=EventType.choices)
    source_image = models.ImageField(upload_to="card-templates/")
    placeholder_config = models.JSONField(default=dict, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name
