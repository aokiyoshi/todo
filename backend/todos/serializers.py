from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Todo


class TodoModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('title', 'text', 'user', 'project')
