from django.test import TestCase
from mixer.backend.django import mixer
from project.models import Project
from rest_framework import status
from rest_framework.test import APIClient
from users.models import User

from .models import Todo


class TodoTest(TestCase):

    def test_get_object(self):
        """
        Тестирование чтения конкретного Todo
        Сначала создается пользователь, проект и заметка (todo)
        Потом проверяется запрос на чтение по id
        """
        admin = User.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        _project = Project.objects.create(
            title='test project',
            repo='test',
        )
        todo = Todo.objects.create(
            title='test',
            text='lorem ipsum',
            user=admin,
            project=_project,
        )
        client = APIClient()
        client.force_authenticate(admin)
        response = client.get(f'/api/todos/{todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_object(self):
        """
        Тестирование чтения объекта, созданного через миксер
        """
        admin = User.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        self.client.force_login(admin)
        todo = mixer.blend(Todo)
        response = self.client.get(f'/api/todos/{todo.id}/')
        print(f'{response.data=}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
