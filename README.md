IT eszköz nyilvántartó

Ez a projekt egy egyszerű IT eszköz nyilvántartó webalkalmazás, amelyben informatikai eszközök (pl. laptop, billentyűzet) kezelhetők.
Az alkalmazás Node.js + Express backenddel és MongoDB adatbázissal készült.

Szükséges programok

A futtatáshoz az alábbiak szükségesek:

Node.js

MongoDB

Böngésző

Indítás lépésről lépésre

A projekt letöltése GitHubról

Nyissunk egy terminált / PowerShellt
és lépjünk be abba a mappába, ahol a package.json található

Függőségek telepítése:

npm install


A szerver indítása:

node server.js


Böngészőben nyissuk meg:

http://localhost:3000

Bejelentkezés

Az alkalmazás indításakor bejelentkezés szükséges.

Alapértelmezett admin felhasználó
Felhasználónév: admin

Jelszó: admin123

Sikeres bejelentkezés után megjelenik az eszközök listája.

Funkciók

Az alkalmazásban lehetőség van:

új IT eszköz hozzáadására

meglévő eszközök listázására

eszköz törlésére

kijelentkezésre az alkalmazásból

Adattárolás

Az adatok MongoDB adatbázisban tárolódnak:

az adatok nem vesznek el a szerver újraindításakor

az eszközök és a felhasználók tartósan megmaradnak

Technológiák

Backend: Node.js, Express

Adatbázis: MongoDB

Frontend: HTML, CSS, JavaScript

Megjegyzés

A felhasználói felület egyszerű és átlátható,
a hangsúly az alkalmazás működésén és logikáján volt.
