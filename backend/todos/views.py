from rest_framework.viewsets import ModelViewSet
from .models import Todo
from .serializers import TodoModelSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer

