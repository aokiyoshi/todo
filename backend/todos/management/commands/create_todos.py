from cgitb import text
from django.core.management.base import BaseCommand

from django.contrib.auth import get_user_model
from backend.utils import make_random_string
from ...models import Todo
from project.models import Project


class Command(BaseCommand):
    help = 'Create some test project objects'

    def handle(self, *args, **kwargs):
        project_id = 2
        for _ in range(5):
            _title = make_random_string(8)
            _text = make_random_string(24)
            _user = get_user_model().objects.get(pk=1)
            _project = Project.objects.get(pk=project_id)

            todo = Todo.objects.create(
                title = _title,
                text = _text,
                user = _user,
                project = _project,
            )

