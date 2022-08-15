from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=16)
    repo = models.CharField(max_length=64)
    users = models.ManyToManyField(get_user_model())
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'[{self.pk}]{self.title}'