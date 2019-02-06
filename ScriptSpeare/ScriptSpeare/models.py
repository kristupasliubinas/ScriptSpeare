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
	abbreviation=models.CharField(max_length=128,unique=True)
	slug=models.SlugField(unique=True)
	
	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Play, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.title

class Interpretation(models.Model):

	ACCENT_CHOICES=[('UK',"UK"),('US',"US")]
	TYPE_CHOICES=[('Film',"Film"),('Stage',"Stage"),('Audio',"Audio")]
	id=models.AutoField(primary_key=True)
	category=models.ForeignKey(Category, on_delete=models.CASCADE)
	play=models.ForeignKey(Play, on_delete=models.CASCADE)
	accent=models.CharField(max_length=2, choices=ACCENT_CHOICES,default='UK')
	type=models.CharField(max_length=10, choices=TYPE_CHOICES,default='Film')
	year=models.CharField(max_length=4, default=1900)
	male_lead_name=models.CharField(max_length=30)
	female_lead_name=models.CharField(max_length=30, blank=True)
	slug=models.SlugField(unique=True)
	
	def save(self, *args, **kwargs):
		self.slug = slugify(self.male_lead_name+self.year)
		super(Interpretation, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.male_lead_name
		
		
		