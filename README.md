# IT eszköz nyilvántartó

Ez a projekt egy egyszerű **IT eszköz nyilvántartó webalkalmazás**,  
amelyben informatikai eszközök (pl. laptop, billentyűzet) kezelhetők.

Az alkalmazás **Node.js + Express** backenddel és **MongoDB** adatbázissal készült.

---

## Szükséges programok

A futtatáshoz az alábbiak szükségesek:

- Node.js  
- MongoDB  
- Böngésző (Chrome / Edge / Firefox)

---

## Indítás lépésről lépésre

1. A projekt letöltése GitHubról (Code → Download ZIP)
2. Kicsomagolás után nyissunk egy terminált / PowerShellt
3. Lépjünk be abba a mappába, ahol a `package.json` található
4. Függőségek telepítése:
   ```bash
   npm install
5. A szerver indítása: node server.js
6. Böngészőben nyissuk meg: http://localhost:3000

---

## 6. Bejelentkezés

Az alkalmazás használatához **bejelentkezés szükséges**.

Az indítás után a felhasználó egy bejelentkezési felületet lát,  
ahol felhasználónév és jelszó megadásával léphet be a rendszerbe.

Amennyiben az adatbázis még nem tartalmaz felhasználót,  
az alkalmazás **automatikusan létrehoz egy alapértelmezett admin felhasználót** az első indításkor.

### Alapértelmezett admin belépési adatok

- **Felhasználónév:** `admin`  
- **Jelszó:** `admin123`

Sikeres bejelentkezés után a rendszer átirányítja a felhasználót  
az IT eszközök nyilvántartó felületére, ahol az eszközök listája megjelenik.

Sikertelen bejelentkezés esetén a rendszer hibaüzenetet jelenít meg.

---

## 7. Kijelentkezés

Az alkalmazás felületén elérhető **„Kijelentkezés”** gomb segítségével  
a felhasználó bármikor kiléphet az alkalmazásból.

Kijelentkezéskor:
- a felhasználói munkamenet megszűnik
- a rendszer visszairányít a bejelentkezési oldalra
- újabb belépés csak ismételt hitelesítéssel lehetséges

A felületen megjelenik az aktuálisan bejelentkezett felhasználó neve  
---

## 8. Jogosultságkezelés

Az alkalmazás csak bejelentkezett felhasználók számára érhető el.  
Amennyiben nincs aktív bejelentkezés, a rendszer automatikusan  
a bejelentkezési oldalra irányítja a felhasználót.

Ez biztosítja, hogy az IT eszközök adatai csak hitelesített felhasználók  
számára legyenek elérhetők.
