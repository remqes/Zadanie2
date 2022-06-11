Inicjalizacja klastra (dla mojej maszyny wirtualnej, klaster był inicjalizowany podczas wcześniejszych laboratoriów)
`$ docker swarm init`

Uruchomienie usług
`$ docker stack deplot -c docker-stack.yml zadanie2`

Kontrola poprawności działania usług
`$ docker service ls`

Usługi uruchamiane za pośrednictwem docker-swarm mają ustalone reguły ilości replik oraz politykę restartu, która sprawia, że usługa w razie awarii uruchomi się ponownie. Polityka restartu zależna jest od rodzaju usługi, jaka ma zostać replikowana, dla baz danych i usług backendowych wystarczającą liczbą replik jest 1, natomiast powielać repliki możemy dla usług frontendowych. 

![docker-swarm-1](/MNzadania/images/docker_swarm_init.PNG)
![docker-swarm-2](/MNzadania/images/docker_swarm_init_2.PNG)
![docker-swarm-3](/MNzadania/images/docker_swarm_view.PNG)
