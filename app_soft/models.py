from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)  # Tytuł badania
    content = models.CharField(max_length=100)  # Imię

    def __str__(self):
        return f"{self.title} - {self.content}"