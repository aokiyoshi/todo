import django_filters

from .models import Project


class ProjectFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']
