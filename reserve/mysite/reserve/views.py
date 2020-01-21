from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from reserve.models import Date
from django.urls import reverse
# Create your views here.

def index(request):
    date_list = Date.objects.all().order_by('date')
    context = {'date_list' : date_list }
    return render(request, 'reserve/index.html', context)

def reserve(request, id):
    date = get_object_or_404(Date, pk=id)
    if date.curr < date.max_capacity:
        date.curr += 1
        date.save()
        return HttpResponseRedirect(reverse('reserve:index'))
    else:
        date_list = Date.objects.all().order_by('date')
        context = {'date_list' : date_list }
        return render(request, 'reserve/index.html', {
            'error_message': "예약 인원이 가득 찼습니다.",
            'date_list' : date_list
        })
