from django.db import models

# Create your models here.
class Date(models.Model):
    max_capacity = models.IntegerField(default=0)
    curr = models.IntegerField(default=0)
    date = models.DateField('Date Field')

    def __str__(self):
        return str(self.date) + ": " + str(self.curr) + "/" + str(self.max_capacity)
