source ../env/bin/activate
python manage.py collectstatic --noinput
python manage.py compress --force
sudo supervisorctl restart all
sudo service nginx restart