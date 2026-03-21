from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255, blank=True)
    age = models.PositiveIntegerField(max_digits=3, blank=True)
    is_debil = models.BooleanField(default=True)
    bio = models.TextField(max_length=255, null=True)
    