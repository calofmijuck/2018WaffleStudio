from django.db import models
from django.urls import reverse

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=140)
    content = models.TextField()
    author = models.CharField(max_length=40)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    hits = models.IntegerField(default=0)
    # id = models.IntegerField()
    password = models.CharField(max_length=20)

    def get_absolute_url(self):
        # hits += 1
        return reverse('post-detail',
            kwargs={'pk': self.pk})

    def __str__(self):
        # hits += 1
        return f"({self.pk}) {self.title}"

    def increase(self):
        self.hits += 1
