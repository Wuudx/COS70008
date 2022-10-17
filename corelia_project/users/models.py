from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class UserTier(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=30, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(null = True, default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to='../static/users/images', blank=True, default = '../static/users/images/Default_profile_pic.png')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'users'
