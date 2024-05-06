from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Charges
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def charges(request):
  if request.method == 'POST':
      data = json.loads(request.body)
      charge = Charges.objects.create(
          name=data['name'],
          government_id=data['governmentId'],
          email=data['email'],
          debt_amount=data['debtAmount'],
          debt_due_date=data['debtDueDate']
      )
      return JsonResponse({'message': 'Charge created successfully'}, status=201)
  else:
      return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
