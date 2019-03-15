from django.shortcuts import render
from django.http import HttpResponse

import requests

def index(request):

	category_list=["Comedy","Tragedy"]
	context_dict = {'categories': category_list}
	return render(request, 'ScriptSpeare/index.html', context_dict)
	
def show_category(request, category):
	context_dict={}
	category_list=["Comedy","Tragedy"]
	
	try:
		category = category
		
		if category=="Comedy":
			plays=['Merchant of Venice','A Midsummer Night\'s Dream', 'Twelfth Night']
		elif category=="Tragedy":
			plays=['Macbeth', 'Hamlet', 'Romeo and Juliet', 'Julius Caesar']
		
		
		context_dict['plays'] = plays
		
		context_dict['category'] = category
		context_dict['categories']= category_list
		
	except :
		context_dict['category'] = None
		context_dict['plays'] = None
		
	return render(request, 'ScriptSpeare/index.html', context_dict)

def show_play(request, category, play, interp_id=0):
	context_dict={}
	
	
	category = category
	play=play
	if category=='Comedy':
		if play=='Merchant of Venice':
			abbr='Merchant'
		elif play=='A Midsummer Night\'s Dream':
			abbr='Midsummer'
		elif play=='Twelfth Night':
			abbr='Twelfth'
		else:
			abbr=play
	elif category=='Tragedy':
		if play=='Romeo and Juliet':
			abbr='Romeo'
		elif play=='Julius Caesar':
			abbr='Julius'
		else:
			abbr=play
	
	interp_id=int(interp_id)
	url="https://1zct9uiole.execute-api.eu-west-2.amazonaws.com/prod/get-adaptation-list?category="+category+"&play="+abbr
	response=requests.get(url)
	all_interp=response.json()
	for i in range(len(all_interp)-1):
		if len(all_interp[i])!=6:
			all_interp[i]=["","","","","",""]
	
	all_interp_edit=all_interp[:]
	
	for el in all_interp:
		el.append(str.replace(el[4],'_',' '))
		el.append(str.replace(el[5],'_',' '))
	id=0
	for el in all_interp:
		el.append(id)
		id=id+1
	
	if len(all_interp)>1:
		interp_id_max=len(all_interp)-1
	else:
		interp_id_max=0
	interp=all_interp[interp_id]
	if int(interp_id)==0:
		prev=interp_id_max
	else:
		prev=interp_id-1
			
	if int(interp_id)==interp_id_max:
		next=0
	else:
		next=interp_id+1
			
			
	context_dict['all_interp']=all_interp
	context_dict['pretty']=all_interp_edit
	context_dict['interp']=interp
	context_dict['interp_id']=interp_id
	context_dict['play']=play
	context_dict['abbr']=abbr
	context_dict['prev']=prev
	context_dict['next']=next
	context_dict['category']=category
		
	
		
		
		
	return render(request, 'ScriptSpeare/interpretation.html', context_dict)