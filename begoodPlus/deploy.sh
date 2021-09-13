source ../env/bin/activate
python manage.py collectstatic --noinput
sudo supervisorctl restart all
sudo service nginx restart
