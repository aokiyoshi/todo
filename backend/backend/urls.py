"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from graphene_django.views import GraphQLView
from project.views import ProjectViewSet
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from todos.views import TodoFilteredByProjectView, TodoModelViewSet
from users.views import UserModelViewSet

from .doc_schema import schema_view

# Router 
router = DefaultRouter()
router.register('todos', TodoModelViewSet)
router.register('users', UserModelViewSet)
router.register('projects', ProjectViewSet)


# Url patterns
urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # Auth
    path('api-auth/', include('rest_framework.urls')),

    # API
    path('api/', include(router.urls)),
    path('api/todos/filter/<str:project_name>/',
         TodoFilteredByProjectView.as_view()),

    # Token
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),

    # Docs
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),

    #GraphQL
    path("graphql/", GraphQLView.as_view(graphiql=True)),
]
