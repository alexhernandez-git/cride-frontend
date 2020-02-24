set COMPOSE_FILE=local.yml
docker rm -f cride_django_1
docker-compose run --rm --service-ports django