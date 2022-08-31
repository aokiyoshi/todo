from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User

class UsersTest(APITestCase):

    def test_get_users(self):
        admin = User.objects.create_superuser(
            'admin', 'admin@admin.com', 'admin123456')
        self.client.force_login(admin)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        