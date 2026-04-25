from django.db import models

class User(models.Model):
    firstname = models.CharField(max_length=255, blank=True)
    lastname = models.CharField(max_length=255, blank=True)
    birth = models.PositiveIntegerField(max_digits=3, blank=True)
    email = models.EmailField(unique=True)
    
    
    def __str__(self):
        return self.name
    