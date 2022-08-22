from rest_framework.serializers import HyperlinkedModelSerializer, SlugField
from .models import Todo


class TodoModelSerializer(HyperlinkedModelSerializer):
    user = SlugField()
    project = SlugField()

    class Meta:
        model = Todo
        fields = ('id', 'title', 'text', 'user', 'project', 'status')
