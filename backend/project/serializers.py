from rest_framework.serializers import HyperlinkedModelSerializer, SlugRelatedField
from .models import Project


class ProjectModelSerializer(HyperlinkedModelSerializer):
    users = SlugRelatedField(many=True, slug_field='username', read_only=True)
    class Meta:
        model = Project
        fields = ('title', 'repo', 'users')


