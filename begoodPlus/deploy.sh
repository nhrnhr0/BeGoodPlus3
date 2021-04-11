sudo git pull
source ../env/bin/activate
python manage.py collectstatic -y
python manage.py compress --force
sudo supervisorctl restart all
sudo service nginx restart