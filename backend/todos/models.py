from pydoc import describe
from turtle import update
from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=16)
    text = models.TextField(blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'[{self.pk}]{self.title}'


    