Uruchomienie usługi w wersji deweloperskiej
`$ docker compose -f docker-compose.dev.yml up`

Zbudowanie oraz dodanie obrazów do repozytorium docker.hub
`$ docker build -t michalnurz/labox:zaddwa-nginx-dev -f Dockerfile.dev .`
`$ docker build -t michalnurz/labox:zaddwa-client-dev -f Dockerfile.dev .`
`$ docker build -t michalnurz/labox:zaddwa-worker-dev -f Dockerfile.dev .`
`$ docker build -t michalnurz/labox:zaddwa-api-dev -f Dockerfile.dev .`

`$ docker push michalnurz/labox:zaddwa-nginx-dev`
`$ docker push michalnurz/labox:zaddwa-client-dev`
`$ docker push michalnurz/labox:zaddwa-worker-dev`
`$ docker push michalnurz/labox:zaddwa-api-dev`


![docker-compose-1](../images/dev_docker_compose)
![docker-compose-2](../images/dev_docker_compose_2)
![docker-compose-3](../images/dev_docker_compose_3)
![docker-compose-4](../images/dev_docker_compose_view)
