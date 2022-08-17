from django.contrib.auth import get_user_model
from django.db import models
from project.models import Project


class Todo(models.Model):
    title = models.CharField(max_length=16)
    text = models.TextField(blank=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    status = models.CharField(max_length=16, choices=[('Created', 'created'), ('In progress', 'inprogress'), (
        'Cancelled', 'cancelled'), ('Done', 'done')], default='created')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f'[{self.pk}]{self.title}'
