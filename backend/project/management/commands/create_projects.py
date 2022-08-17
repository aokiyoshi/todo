from django.core.management.base import BaseCommand

from django.contrib.auth import get_user_model
from backend.utils import make_random_string
from ...models import Project


class Command(BaseCommand):
    help = 'Create some test project objects'

    def handle(self, *args, **kwargs):

        for _ in range(5):

            _title = make_random_string(10)
            _repo = make_random_string(24)
            _user = get_user_model().objects.get(pk=1)

            project = Project.objects.create(
                title = _title,
                repo = _repo,
            )

            project.users.set((_user,))
            project.save()
