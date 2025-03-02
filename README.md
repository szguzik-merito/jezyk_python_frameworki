## 📝 Wymagania Techniczne i Organizacyjne

### 🔹 Oddanie projektu
Projekt należy oddać poprzez repozytorium **GIT** (np. GitHub, GitLab, Bitbucket).

### 🔹 Terminy oddania:
- **Pierwszy termin** – ostatni dzień zajęć.
- **Drugi termin** – zgodnie z ustaleniami uczelni.

### 🔹 Forma oddania:
Link do repozytorium należy wysłać na adres e-mail:
📧 **szymon.guzik@gdansk.merito.pl**

#### 📌 Temat wiadomości:
```
Nazwa przedmiotu, Imię numer indeksu, numer grupy
```
**Przykład:**
```
Programowanie obiektowe, Szymon 43261, ININ4_PG1
```

✅ **UWAGA:** Wiadomość należy wysłać z akademickiej skrzynki e-mail. Wysyłka z innego adresu może skutkować brakiem zaliczenia.

---

## 🎯 Powtarzanie przedmiotu, sesja poprawkowa, warunek itp.
W przypadku konieczności powtarzania przedmiotu, sesji poprawkowej lub warunkowego zaliczenia, obowiązuje wykonanie tego samego zadania. 

📅 **Termin oddania ustalany jest indywidualnie** poprzez kontakt e-mailowy. Aby rozpocząć proces zaliczenia, należy skontaktować się z wykładowcą i oczekiwać na wiadomość zwrotną z ustaloną datą oddania projektu.

---

# 🚀 Instalacja Django i Konfiguracja Środowiska Wirtualnego

## 📌 1. Tworzenie środowiska wirtualnego
Aby stworzyć środowisko wirtualne, uruchom następującą komendę w terminalu:

```bash
python -m venv .venv
```

## 📌 2. Aktywacja środowiska wirtualnego

- **Windows (cmd/PowerShell):**
  ```bash
  .venv\Scripts\activate
  ```

- **Linux/macOS:**
  ```bash
  source .venv/bin/activate
  ```

Po aktywacji środowiska wirtualnego, w terminalu powinno pojawić się `(venv)` lub `(.venv)`, co oznacza, że pracujesz wewnątrz wirtualnego środowiska.

---

## 📌 3. Instalacja Django
Aby zainstalować Django, wpisz:

```bash
pip install django
```

---

## 📌 4. Tworzenie nowego projektu Django
Aby utworzyć nowy projekt Django o nazwie **project_soft**, uruchom:

```bash
django-admin startproject project_soft .
```
Kropka (`.`) na końcu polecenia oznacza, że projekt zostanie utworzony w bieżącym katalogu.

---

## 📌 5. Tworzenie nowej aplikacji w Django
Aby dodać aplikację **app_soft** do projektu, wpisz:

```bash
django-admin startapp app_soft
```

Aplikacja **app_soft** zostanie utworzona w katalogu projektu.

---

## 📌 6. Zapisywanie zależności projektu
Aby zapisać aktualne zależności projektu do pliku `requirements.txt`, użyj:

```bash
pip freeze > requirements.txt
```

Dzięki temu w przyszłości można łatwo odtworzyć środowisko używając:

```bash
pip install -r requirements.txt
```

---

## 📌 7. Polecenia
Poniżej znajdują się najważniejsze polecenia związane z projektem Django i obsługą środowiska deweloperskiego.

### 🔹 Instalacja zależności frontendowych
Aby zainstalować paczki npm wymagane do budowania frontendu, użyj:

```bash
npm i
```

### 🔹 Budowanie aplikacji frontendowej
Aby zbudować frontend, użyj:

```bash
npm run vite:build
```

### 🔹 Uruchamianie serwera deweloperskiego Django
Aby uruchomić lokalny serwer Django, wpisz:

```bash
python manage.py runserver
```

Dostępne dla:
- **Windows (cmd/PowerShell)**
- **Linux/macOS**

### 🔹 Tworzenie migracji dla bazy danych
Jeśli dodałeś nowe modele lub zmieniłeś strukturę bazy danych, wygeneruj migracje:

```bash
python manage.py makemigrations
```

Następnie zastosuj migracje do bazy danych:

```bash
python manage.py migrate
```

### 🔹 Tworzenie superużytkownika Django
Aby utworzyć konto administratora w Django, użyj:

```bash
python manage.py createsuperuser
```

Postępuj zgodnie z instrukcjami wyświetlanymi w terminalu, aby utworzyć użytkownika z uprawnieniami administratora.

### 🔹 Powtórne uruchamianie serwera po migracjach
Po wykonaniu migracji lub dodaniu superużytkownika uruchom ponownie serwer:

```bash
python manage.py runserver
```

Dostępne dla:
- **Windows (cmd/PowerShell)**
- **Linux/macOS**

---

## ✅ Podsumowanie
Powyższe kroki pozwalają na utworzenie środowiska wirtualnego, instalację Django oraz konfigurację projektu i aplikacji. Teraz możesz rozpocząć pracę nad projektem! 🎯

💡 **Pamiętaj, aby zawsze aktywować środowisko wirtualne przed pracą nad projektem!** 🛠️
