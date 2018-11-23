from django import forms

class PostForm(forms.Form):
    title = forms.CharField(label='Title', max_length=140)
    author = forms.CharField(label='Author', max_length=40)
    content = forms.CharField(label='Content', widget=forms.Textarea)
