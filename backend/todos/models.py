from pydoc import describe
from turtle import update

from django.contrib.auth import get_user_model
from django.db import models
from project.models import Project


class Todo(models.Model):
    title = models.CharField(max_length=16)
    text = models.TextField(blank=True)
    user = models.OneToOneField(get_user_model(), null=True, on_delete=models.CASCADE)
    project = models.OneToOneField(Project, null=True, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'[{self.pk}]{self.title}'
