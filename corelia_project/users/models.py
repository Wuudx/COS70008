from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import UserManager

class UserTier(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class User(AbstractBaseUser, PermissionsMixin):
    #id (Primary Key)?
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=30, unique=True)
    tier = models.ForeignKey(UserTier, on_delete=models.CASCADE, blank=True, null=True) #should be NOT NULL, default=0? Testing
    authenticated = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'users'
