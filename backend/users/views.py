from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .models import User
from .serializers import UserModelSerializer, UserModelSerializerV2


class UserModelViewSet(mixins.RetrieveModelMixin,
                       mixins.UpdateModelMixin,
                       mixins.ListModelMixin,
                       GenericViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserModelSerializer

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserModelSerializerV2
        return UserModelSerializer

    
