from rest_framework.viewsets import ModelViewSet
from .models import Project
from .serializers import ProjectModelSerializer
from .paginators import ProjectLimitOffsetPagination
from .filters import ProjectFilter

class ProjectViewSet(ModelViewSet):
    pagination_class = ProjectLimitOffsetPagination
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter