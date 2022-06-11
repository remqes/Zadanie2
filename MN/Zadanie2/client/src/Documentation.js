import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />

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

      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
