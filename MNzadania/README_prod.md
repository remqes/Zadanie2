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


![docker-compose-1](/MNzadania/images/docker_compose.PNG)
![docker-compose-2](/MNzadania/images/docker_compose_2.PNG)
![docker-compose-4](/MNzadania/images/docker_compose_view.PNG)


[dockerhub nginx](https://hub.docker.com/layers/232512029/michalnurz/labox/zaddwa-nginx/images/sha256-cc6b671b601461fd0c506339a0aae22066c544c62c2951c870c2a69827016e82?context=repo)
[dockerhub worker](https://hub.docker.com/layers/232513634/michalnurz/labox/zaddwa-worker/images/sha256-cf75d85e238a5ffb483cc5b637120879b748410d87f66aa8c2d3f8b916f497d5?context=repo)
[dockerhub client](https://hub.docker.com/layers/232512531/michalnurz/labox/zaddwa-client/images/sha256-1dba2702f40745318ba3a4565bbb6b0c1d88fa40bde3920f7cb18c8ead99b9d7?context=repo)
[dockerhub server](https://hub.docker.com/layers/232513214/michalnurz/labox/zaddwa-server/images/sha256-edcf74756df4b6a6ad0b405a354e413cd2c2c78dc912666b92f657e5a9b30651?context=repo)
