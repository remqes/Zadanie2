<h2>Laboratorium programowania aplikacji w chmurach obliczeniowych.</h2>
<h2>Zadanie 2</h2>

Przedmiotem zadania jest usługa wyliczająca wartość k-tego elementu ciągu geometrycznego dla zadanej wartości k. Narzucone jest ograniczenie na wartość k (k=<10)

- Aplikacja wzorowana jest na przykładzie usługi "Kalkulator ciągu Fibonacciego", która została zaprezentowana w trakcie laboratorium nr 11.
- Po uruchomieniu aplikacji, użytkownik ma dostęp do 3 stron web: strona główna, kalkulator ciągu geometrycznego oraz opis opracowanej usługi.

Dokonane modyfikacje względem bazowej aplikacji:
- katalog client: 
    - dokonanie wymaganych zmian, zawartych w treści zadania (imię i nazwisko autora, wprowadzenie tekstu do pliku Documentation.js).
    - pliki Dockerfile bez zmian
    
- katalog worker: 
    - dokonanie niezbędnych zmian działania aplikacji, aby wyliczała wartość ciągu.
    - Dockerfile.dev zawiera dodatkowo informację o wolumenie oraz port na jakim został wystawiony na zewnątrz, a Dockerfile produkcyjny zyskał tylko numer portu.

- katalog server:
    - Dockerfile.dev zawiera dodatkowo informację o wolumenie oraz port na jakim został wystawiony na zewnątrz, a Dockerfile produkcyjny zyskał tylko numer portu.
- katalog nginx:
    - do obu plików Dockerfile dodany został numer portu

[README_dev.md](https://github.com/remqes/Zadanie2/blob/master/MNzadania/README_dev.md)
[README_prod.md](https://github.com/remqes/Zadanie2/blob/master/MNzadania/README_prod.md)
[README_stack.md](https://github.com/remqes/Zadanie2/blob/master/MNzadania/README_stack.md)
