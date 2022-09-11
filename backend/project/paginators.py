from rest_framework.pagination import LimitOffsetPagination

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 100