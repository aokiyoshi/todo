from django.contrib import admin

from users.models import User
from todos.models import Todo

admin.site.register(User)
admin.site.register(Todo)