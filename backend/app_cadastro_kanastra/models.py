from django.db import models

class Charge(models.Model):
  name = models.CharField(max_length=255)
  government_id = models.CharField(max_length=11)
  email = models.EmailField()
  debt_amount = models.DecimalField(max_digits=10, decimal_places=2)
  debt_due_date = models.DateField()
