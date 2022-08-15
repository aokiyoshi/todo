from rest_framework.viewsets import ModelViewSet
from .models import Project
from .serializers import ProjectModelSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer