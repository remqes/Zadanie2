Uruchomienie usługi w wersji deweloperskiej
`$ docker compose -f docker-compose.yml up`

Zbudowanie oraz dodanie obrazów do repozytorium docker.hub
`$ docker build -t michalnurz/labox:zaddwa-nginx -f Dockerfile .`
`$ docker build -t michalnurz/labox:zaddwa-client -f Dockerfile .`
`$ docker build -t michalnurz/labox:zaddwa-worker -f Dockerfile .`
`$ docker build -t michalnurz/labox:zaddwa-api -f Dockerfile .`

`$ docker push michalnurz/labox:zaddwa-nginx`
`$ docker push michalnurz/labox:zaddwa-client`
`$ docker push michalnurz/labox:zaddwa-worker`
`$ docker push michalnurz/labox:zaddwa-api`


![docker-compose-1](/MNzadania/images/docker_compose)
![docker-compose-2](/MNzadania/images/docker_compose_2)
![docker-compose-3](/MNzadania/images/docker_compose_3)
![docker-compose-4](/MNzadania/images/docker_compose_view)
