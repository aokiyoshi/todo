from rest_framework.serializers import HyperlinkedModelSerializer, SlugRelatedField
from .models import Project


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ('title', 'repo', 'users', 'id')


