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


![docker-compose-1](/MNzadania/images/dev_docker_compose.PNG)
![docker-compose-2](/MNzadania/images/dev_docker_compose_2.PNG)
![docker-compose-3](/MNzadania/images/dev_docker_compose_3.PNG)
![docker-compose-4](/MNzadania/images/dev_docker_compose_view.PNG)

[dockerhub nginx-dev](https://hub.docker.com/layers/labox/michalnurz/labox/zaddwa-nginx-dev/images/sha256-cc6b671b601461fd0c506339a0aae22066c544c62c2951c870c2a69827016e82?context=repo) |
[dockerhub worker-dev](https://hub.docker.com/layers/labox/michalnurz/labox/zaddwa-worker-dev/images/sha256-d207863f38cbc54bc8e99cd29ec27b4cd2b2d0ec7abacd47a71032929bd0080a?context=repo) |
[dockerhub client-dev](https://hub.docker.com/layers/labox/michalnurz/labox/zaddwa-client-dev/images/sha256-b9e19e08d852af3985c93dd4426257fe1f47bfb9b7e1879e1d741e14dfefee72?context=repo) |
[dockerhub server-dev](https://hub.docker.com/layers/labox/michalnurz/labox/zaddwa-server-dev/images/sha256-d80a889184a1aa4c52231cdae36aef8d8d5c308058727a9074a676818b015615?context=repo)
