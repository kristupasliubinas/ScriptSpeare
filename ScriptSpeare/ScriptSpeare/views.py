from django.shortcuts import render
from django.http import HttpResponse
from ScriptSpeare.models import Category,Play, Interpretation

def index(request):

	category_list=Category.objects.all()
	context_dict = {'categories': category_list}
	return render(request, 'ScriptSpeare/index.html', context_dict)
	
def show_category(request, category_name_slug):
	context_dict={}
	
	try:
		category = Category.objects.get(slug=category_name_slug)
		
		plays=Play.objects.filter(category=category)
		context_dict['plays'] = plays
		
		context_dict['category'] = category
		
	except Category.DoesNotExist:
		context_dict['category'] = None
		context_dict['plays'] = None
		
	return render(request, 'ScriptSpeare/category.html', context_dict)

def show_play(request, category_name_slug, play_slug):
	context_dict={}
	
	try:
		play=Play.objects.get(slug=play_slug)
		
		interp=Interpretation.objects.filter(play=play)
		context_dict['interp']=interp
		
		context_dict['play']=play
		context_dict['category']=Category.objects.get(slug=category_name_slug)
		
	except Play.DoesNotExist:
		context_dict['intrep'] = None
		context_dict['play'] = None
		context_dict['category']=None
		
		
	return render(request, 'ScriptSpeare/play.html', context_dict)
	
def show_interpretation(request, category_name_slug, play_slug, interpretation_lead_slug, interp_id):
	context_dict={}
	
	try:
		play=Play.objects.get(slug=play_slug)
		
		all_interp=Interpretation.objects.filter(play=play)
		interp=Interpretation.objects.get(id=interp_id)
		
		context_dict['all_interp']=all_interp
		context_dict['interp']=interp
		context_dict['play']=play
		context_dict['category']=Category.objects.get(slug=category_name_slug)
		
	except Play.DoesNotExist:
		context_dict['all_interp']=None
		context_dict['interp'] = None
		context_dict['play'] = None
		context_dict['category']=None
		
		
	return render(request, 'ScriptSpeare/interpretation.html', context_dict)
		