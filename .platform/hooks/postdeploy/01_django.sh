#!/bin/bash

source /var/app/venv/*/bin/activate && {
# Navigate to the frontend directory
cd frontend

# Install npm dependencies (ensure package-lock.json is present)
npm install

# Build the React app
npm run build

# Navigate back to the Django project root
cd ..

# collecting static files
python manage.py collectstatic --noinput;
# log which migrations have already been applied
python manage.py showmigrations;
# migrate the rest
python manage.py migrate --noinput;
# another command to create a superuser (write your own)
python manage.py createsu;

}