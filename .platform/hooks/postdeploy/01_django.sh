#!/bin/bash

# Activate the virtual environment
source /var/app/venv/*/bin/activate && {

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found"
    exit 1
fi

# Navigate to the frontend directory
cd frontend

# Install npm dependencies (ensure package-lock.json is present)
npm install

# Build the React app
npm run build

# Navigate back to the Django project root
cd ..

# Collect static files (including React build)
python manage.py collectstatic --noinput

# Log which migrations have already been applied
python manage.py showmigrations

# Apply any remaining migrations
python manage.py migrate --noinput
}
