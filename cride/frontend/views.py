
from django.shortcuts import render

# Create your views here.
from django.views import View


def index(request):
    return render(request, 'index.html')

# class Index(View):
#     title = "Home"
#     template = 'index.html'

    # def get(self, request):
    #     questions = list(Question.objects.values('pk', 'question_text'))

    #     context = {
    #         'question_text': self.title,
    #         'props': questions,
    #     }

    #     return render(request, self.template, context)
