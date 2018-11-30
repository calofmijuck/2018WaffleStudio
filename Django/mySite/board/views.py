# from django.shortcuts import render
# from django.template import loader
from django.http import HttpResponse
from django.views.generic import TemplateView
from .models import Post
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import redirect
from django.views.generic.edit import FormView
from .forms import PostForm

# def index(request):
#     return HttpResponse("<h1>Hello World!</h1>")

class IndexView(FormView):
    template_name = "create.html"
    form_class = PostForm

    def form_valid(self, form):
        p = Post.objects.create(**form.cleaned_data)
        return redirect(f"/board/detail/{p.pk}")

class DetailView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        try:
            p = Post.objects.get(pk=self.request.GET.get('id'))
            return { 'title': p.title, 'content': p.content }
        except ObjectDoesNotExist:
            return { 'title': '없는 게시물입니다.', 'content': None }
