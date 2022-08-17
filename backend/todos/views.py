from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.renderers import BrowsableAPIRenderer, JSONRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from project.models import Project

from .models import Todo
from .paginators import TodoLimitOffsetPagination
from .serializers import TodoModelSerializer
from .filters import TodoFilter

class TodoModelViewSet(ModelViewSet):
    pagination_class = TodoLimitOffsetPagination
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['project',]

    def destroy(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.status = 'cancelled'
        obj.save()
        return Response(status=status.HTTP_200_OK)


class TodoFilteredByProjectView(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    

    def get_queryset(self):
        project_name = self.kwargs['project_name']
        project = Project.objects.filter(title=project_name).first()
        return Todo.objects.filter(project=project).all()