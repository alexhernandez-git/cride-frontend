set COMPOSE_FILE=local.yml
docker rm -f cride-platzi_postgres_1
docker-compose run --rm --service-ports postgres