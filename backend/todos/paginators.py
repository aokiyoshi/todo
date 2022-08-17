from rest_framework.pagination import LimitOffsetPagination

class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20