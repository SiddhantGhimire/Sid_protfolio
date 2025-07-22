from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm


# Create your views here.
def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save() 
            
            messages.success(request, 'Message sent successfully!')
            return redirect('#home')  # reloads home page with anchor
    else:
        form = ContactForm()

    return render(request, 'home.html', {'form': form})

