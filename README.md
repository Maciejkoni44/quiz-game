# Quiz o Grach

Quiz o popularnych grach wideo z różnymi typami pytań, systemem punktowym, tableą wyników i różnymi poziomami trudności.

## Funkcje:

- Różne typy pytań:
  - Pytania wielokrotnego wyboru
  - Pytania z własną odpowiedzią tekstową
- System odliczania czasu zależny od poziomu trudności:
  - Łatwy: 60 sekund na pytanie
  - Trudny: 40 sekund na pytanie
  - Strasznie trudny: 20 sekund na pytanie
- Tabela wyników z zapisem do localStorage
- Trzy poziomy trudności
- Eksport wyników do pliku JSON
- Responsywny design działający na różnych urządzeniach
- System ulepszaczy:
  - Po 5 poprawnych odpowiedziach pod rząd otrzymujesz losowy ulepszacz
  - Ulepszacz podwójnego punktów (×2) - daje podwójne punkty za jedno pytanie
  - Ulepszacz podwójnego czasu (⏱) - podwaja czas na odpowiedź w zależności od poziomu trudności
  - Ulepszacz eliminacji odpowiedzi (½) - usuwa połowę niepoprawnych odpowiedzi
- Interaktywny tutorial krok po kroku, pokazujący jak grać w quiz
- Różne kategorie pytań (losowo wybierane z bazy)
- System wskazówek/power-upów dostępnych podczas rozgrywki
- Zadania dzienne do wykonania z nagrodami
- Tryb SZYBCIOR z 25 pytaniami i tylko 10 sekundami na odpowiedź

## Jak grać:

1. Możesz obejrzeć szczegółowy tutorial klikając przycisk "Jak grać? - Tutorial" na ekranie powitalnym
2. Wpisz swoją nazwę i wybierz poziom trudności
3. Kliknij "Rozpocznij Quiz"
4. Odpowiadaj na pytania w wyznaczonym czasie (zależnym od poziomu trudności)
5. Za poprawne odpowiedzi zdobywasz monety i punkty
6. Zbierz 10 monet, aby przejść do następnego zestawu
7. Im trudniejszy poziom, tym więcej punktów zdobywasz za poprawne odpowiedzi, ale masz mniej czasu na odpowiedź
8. Po 5 poprawnych odpowiedziach pod rząd otrzymasz losowy ulepszacz, który możesz wykorzystać w dogodnym momencie

## Typy pytań:

### Pytania wielokrotnego wyboru
Pytania z czterema możliwymi odpowiedziami, wybierz poprawną.

### Pytania z własną odpowiedzią
Pytania wymagające wpisania własnej odpowiedzi. System akceptuje różne warianty odpowiedzi.

## Układ plików:

- `index.html` - Struktura HTML quizu
- `styles.css` - Style CSS
- `script.js` - Logika gry
- `images/` - Pliki obrazów (jeśli dodasz pytania z obrazami)

## Wymagania:

- Nowoczesna przeglądarka internetowa z obsługą JavaScript i LocalStorage

## Modyfikacja i dostosowanie:

Aby dodać własne pytania, zmodyfikuj tablicę `quizData` w pliku `script.js`.

Przykładowa struktura pytania wielokrotnego wyboru:
```javascript
{
    category: "Nazwa kategorii",
    type: "multiple-choice",
    question: "Treść pytania?",
    answers: [
        "Odpowiedź 1",
        "Odpowiedź 2",
        "Odpowiedź 3",
        "Odpowiedź 4"
    ],
    correct: 0, // Indeks poprawnej odpowiedzi (0-3)
    difficulty: "łatwy" // "łatwy", "średni" lub "trudny"
}
```

Przykładowa struktura pytania z własną odpowiedzią:
```javascript
{
    category: "Nazwa kategorii",
    type: "text-input",
    question: "Treść pytania wymagającego wpisania odpowiedzi?",
    correctAnswers: ["odpowiedź1", "odpowiedź2", "wariant3"], // Akceptowane odpowiedzi
    caseSensitive: false, // Czy sprawdzać wielkość liter
    difficulty: "łatwy" // "łatwy", "średni" lub "trudny"
}
```

## Zadania dzienne

Gra oferuje system zadań dziennych, które polegają na rozwiązaniu trzech quizów tematycznych:
- Każdego dnia generowane są nowe zadania z różnych kategorii (Minecraft, Fortnite, CS:GO)
- Każde zadanie składa się z trzech pytań
- Po ukończeniu wszystkich zadań dziennych, gracz otrzymuje specjalną nagrodę (+5 punktów)
- Postęp zadań jest zapisywany i resetowany każdego dnia
- Gracz otrzymuje powiadomienia o ukończeniu zadań i możliwości odebrania nagrody

## Tryb SZYBCIOR

Specjalny tryb gry dla prawdziwych mistrzów quizów:
- 25 losowo wybranych pytań wielokrotnego wyboru
- Tylko 10 sekund na odpowiedź na każde pytanie
- System punktacji premiujący szybkie odpowiedzi:
  - 1 punkt bazowy za poprawną odpowiedź
  - Do 2 dodatkowych punktów za szybkość (im szybciej, tym więcej)
- Podsumowanie wyników na koniec trybu:
  - Liczba poprawnych odpowiedzi
  - Łączna liczba zdobytych punktów
  - Średni czas odpowiedzi
- Dodatkowe oznaczenie [SZYBCIOR] przy wyniku w tabeli rekordów

Kocham gry wideo i mam nadzieję, że ten quiz sprawi Ci przyjemność! ❤️🎮 