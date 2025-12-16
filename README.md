# IT eszköz nyilvántartó

## Indítás
1. Node.js és MongoDB szükséges
2. Projekt mappában:
   npm install
   node server.js
3. Böngésző: http://localhost:3000

## Bejelentkezés
Felhasználónév: admin  
Jelszó: admin123

Ez a program egy egyszerű IT eszköz nyilvántartó webalkalmazás.
Az volt a célom, hogy lehessen benne informatikai eszközöket (pl. laptop, billentyűzet)
átláthatóan kezelni.
Az alkalmazás használatához be kell jelentkezni felhasználónévvel és jelszóval.
Sikeres bejelentkezés után megjelenik az eszközök listája.

Lehet:

  *új eszközt hozzáadni
  
  *a meglévő eszközöket megnézni
  
  *eszközt törölni
  
  *kijelentkezni az alkalmazásból
  
Az adatok egy MongoDB adatbázisban tárolódnak, ezért nem vesznek el akkor sem,
ha a szervert újraindítjuk.
A felhasználói felület egyszerű, de átlátható, a hangsúly a működésen volt.
A backend Node.js + Express segítségével készült, az adatbázis MongoDB.

