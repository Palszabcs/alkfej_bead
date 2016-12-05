# Alkalmazás Fejlesztés Beadnadó
## Dokumentáció

##### Pál Szabolcs, E5M3EI
##### palszabcs@gmail.com

#Brainstrom börze

##1. Követelményanalízis

###1.1 Célkitűzés, projektindító dokumentum

A program legfőbb célja, hogy bárki segítséget találhasson egy projektjének a elkészítéséhez, akár megvalósításhoz kell, akár támogatót keres vagy csak egyszerűen nincs teljesen még kész a terv.
Az ötleteket, webes kliensel hozzuk létre, az adat védelem érdekében legyen lehetőség regisztrációra. A bejelentkezett felhasználó megtekintheti az ötletek listáját, tehet fel saját ötletet, törölheti azokat és megjegyzést írhat hozzájuk.

####Funkcionális követelmények:

- Regisztráció
- Bejelentkezés
- Bejelentkezett felhasználó funkció:
    - új ötlet feltöltése
    - meglévő ötletének szerkesztése
    - meglévő ötletének törlése
    - ötletek szűrése

####Nem funkcionális követelmények:

- Könnyű áttekinthetőség: színekkel és címkékkel külön csoportosítás.
- Használhatóság: Könnyű áttekinthetőség, logikus elrendezés, kezelhetőség.
- Megbízhatógás: jelszóvel védett funkciók, hibakezelés legyen áttekinthető.
- Karbantarthatóság: könnyen és gyorsan lehessen új szekciókkal bővíteni, régieket módosítani.

###1.2 Fogalomjegyzék

####Projekt típusok:
    - megvalósítás: szakmai segítség nyújtása, befektetés
    - támogatás: költségek kisegítése, adományozás
    - tervezés: befejezetlen projekt kiegészítése

###1.3. Használatieset-modell, funkcionális követelmények

####Vendég: Csak a publikus oldalakat éri el

- Főoldal
- Bejelentkezés
- Regisztráció

####Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

- Új projekt felvétele
- Ötlet megtekintése
- Ötlet szerkesztése
- Ötlet törlése
- Ötlet szerkesztése

![](docs/images/umlproject.jpg)
<<<<<<< HEAD

## 2. Tervezés

### Oldaltérkép

####Publikus:

- főoldal
- bejelentkezés
- regisztráció

####Bejelentkezett:

- ötletek
  - új ötlet
  - ötlet megtekintése
    - saját ötlet szerkesztése
    - saját ötlet törlése
  - ötletek szűrése

#### Design-tervek megvalósítása

Főoldal bejelentkezés nélkül
![Főoldal](docs/images/design01.jpg)

Regisztráció
![Regisztráció](documentation-assets/progress-images/final/regisztracio.PNG)

Bejelentkezés
![Bejelentkezés](documentation-assets/progress-images/final/bejelentkezes.PNG)

Feladatok
![Feladatok](documentation-assets/progress-images/final/feladatok.PNG)

Új feladat
![Új feladat](documentation-assets/progress-images/final/ujfeladat.PNG)

Feladat részletek
![Feladat részletek](documentation-assets/progress-images/final/feladatreszletek.PNG)

Feladat szerkesztés
![Feladat szerkesztés](documentation-assets/progress-images/final/feladatszerkesztes.PNG)

Feladat törlés
![Feladat törlés](documentation-assets/progress-images/final/feladattorles.PNG)

Jogosultságok
![Jogosultságok](documentation-assets/progress-images/final/jogosultsagok.PNG)

Új jogosultság
![Új jogosultság](documentation-assets/progress-images/final/ujjogosultsag.PNG)

Jogosultság szerkesztése
![Jogosultság szerkesztése](documentation-assets/progress-images/final/jogosultsagszerkesztes.PNG)

Jogosultság törlés
![Jogosultság törlés](documentation-assets/progress-images/final/jogosultsagtorles.PNG)

### Adatbázis-kapcsolatok

![Adatbázis-kapcsolatok](documentation-assets/db-relations-1.png)
=======
>>>>>>> 5fd5fc93f618177611ca79609d1b4fa984254fa1
