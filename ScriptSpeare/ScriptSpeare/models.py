from django.db import models
from django.template.defaultfilters import slugify

class Category(models.Model):
	name = models.CharField(max_length=128, unique=True)
	slug=models.SlugField(unique=True)
	
	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super(Category, self).save(*args, **kwargs)
		
	class Meta:
		verbose_name_plural = 'categories'
	
	def __str__(self):
		return self.name
		
class Play(models.Model):	
	category=models.ForeignKey(Category, on_delete=models.CASCADE,)
	title=models.CharField(max_length=128,unique=True)
	slug=models.SlugField(unique=True)
	
	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Play, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.title

class Interpretation(models.Model):
	category=models.ForeignKey(Category, on_delete=models.CASCADE)
	play=models.ForeignKey(Play, on_delete=models.CASCADE)
	lead=models.CharField(max_length=128)
	year=models.IntegerField(default=0)
	slug=models.SlugField(unique=True)
	
	def save(self, *args, **kwargs):
		self.slug = slugify(self.lead)
		super(Interpretation, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.lead