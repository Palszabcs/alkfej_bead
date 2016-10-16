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
    - üzenet, komment írása

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
- Projekt megtekintése
- Projekt szerkesztése
- Projekt törlése
- Komment írása
