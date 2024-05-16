

import threading
from django.http import JsonResponse
from django.shortcuts import render

from django.core.mail import EmailMessage
from django.template.loader import render_to_string

from django.core.mail import EmailMessage

from project import settings

def home(request):
    return render(request, 'home/home.html')   
class EmailThread(threading.Thread):
    def __init__(self,email_message):
        self.email_message=email_message
        threading.Thread.__init__(self)
    def run(self):
        self.email_message.send() 
def contact_form(request):

    if request.method == 'POST':
        try:
            name = request.POST.get('name')
            subject = request.POST.get('subject')
            email = request.POST.get('email')
            tel = request.POST.get('tel')
            message = request.POST.get('message')
            mail_subject='Message from your contact form.'
            message=render_to_string('home/contact_form.html',{
                "name":name,
                'subject':subject,
                'tel':tel,
                'message': message,
                })
            
            email_message=EmailMessage(mail_subject,message,settings.EMAIL_HOST_USER, [email])
            email_message.content_subtype='html'
            EmailThread(email_message).start()
            return JsonResponse({'success':True}) 
        except Exception as e: 
            print('E',e)   
        return JsonResponse({'success':False}) 
    else:
        return JsonResponse({"error": "Invalid request method"}) 