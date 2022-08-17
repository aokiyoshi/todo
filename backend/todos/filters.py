import django_filters
from .models import Todo


class TodoFilter(django_filters.FilterSet):
    project = django_filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Todo
        fields = ['project']