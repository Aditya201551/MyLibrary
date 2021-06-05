from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Feedback(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    feedback=models.TextField()

    def __str__(self):
        return str(self.user.username)

class Book(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    course = models.CharField(max_length=255)
    semester = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)

    def __str__(self):
        return self.name+" | "+self.course
