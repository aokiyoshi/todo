from rest_framework.viewsets import ModelViewSet

from .filters import ProjectFilter
from .models import Project
from .paginators import ProjectLimitOffsetPagination
from .serializers import ProjectModelSerializer


class ProjectViewSet(ModelViewSet):
    pagination_class = ProjectLimitOffsetPagination
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
