from rest_framework import status
from rest_framework.test import APITestCase

from .models import Todo

class TodoTest(APITestCase):
    def test_create_todos(self):
        '''
        Ensure we can create a new todos object.
        '''
       
        data = {
            'title': 'do the homework',
            'text': 'Dont forget about smoke tests',
        }
        response = self.client.post('/api/todos/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Todo.objects.count(), 1)
        self.assertEqual(Todo.objects.get().title, 'do the homework')
        self.assertEqual(Todo.objects.get().text, 'Dont forget about smoke tests')
        