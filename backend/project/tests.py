from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate
from users.models import User

from .views import ProjectViewSet


class TestProjectViewSet(TestCase):

    def test_get_list(self):
        """
        Тестирование чтения проектов
        """
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        admin = User.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        force_authenticate(request, admin)
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_project(self):
        """
        Тестирование создания проектов
        """
        factory = APIRequestFactory()
        admin = User.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        data = {
            'title': 'test',
            'repo': 'testrepo',
            'users':  [f'http://testserver/api/users/{admin.pk}/']
        }
        request = factory.post('/api/projects/', data, format='json')
        force_authenticate(request, admin)
        view = ProjectViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
