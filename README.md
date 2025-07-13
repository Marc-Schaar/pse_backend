## Beschreibung

Dieses Projekt ist eine NestJS-Anwendung zur Verwaltung des Periodensystems der Elemente mit einer PostgreSQL-Datenbank.
Das dazugehörige Frontend findest du [hier](https://github.com/Marc-Schaar/pse_frontend).

## Projekt einrichten

```bash
$ npm install
```

## Datenbank einrichten

Wenn du das Projekt klonst, musst du eine neue PostgreSQL-Datenbank anlegen und konfigurieren:

- PostgreSQL-Datenbank erstellen

```bash
$ createdb pse_element_db

```

- Benutzer anlegen und Rechte vergeben

```bash

createuser testuser
psql -c "ALTER USER testuser WITH PASSWORD 'testpassword';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE pse_element_db TO testuser;"

```

- .env-Datei anlegen

Lege im Backend-Verzeichnis eine .env-Datei an mit den Datenbankverbindungsinformationen, z.B.:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=testuser
DB_PASSWORD=testpassword
DB_DATABASE=pse_element_db

```

## Starte die Datenbank

```bash
$ psql -h localhost -U testuser -d pse_element_db

```

## Tabele formatieren

```bash
CREATE TABLE pse_elements (
  id SERIAL PRIMARY KEY,
  ordnungszahl INTEGER NOT NULL UNIQUE,
  symbol VARCHAR(5) NOT NULL,
  name VARCHAR(100) NOT NULL,
  atommasse FLOAT,
  aggregatzustand VARCHAR(50),
  kategorie VARCHAR(50),
  siedepunkt_k FLOAT,
  schmelzpunkt_k FLOAT,
  elektronegativitaet FLOAT,
  dichte_g_cm3 FLOAT,
  entdeckt VARCHAR(100),
  oxidationszahlen VARCHAR(100),
  gruppe INTEGER,
  periode INTEGER
);

```

## Importiere die Tabellen und Daten

```bash
$ \copy pse_elements (
  ordnungszahl,
  symbol,
  name,
  atommasse,
  aggregatzustand,
  kategorie,
  "siedepunkt_k",
  "schmelzpunkt_k",
  elektronegativitaet,
  "dichte_g_cm3",
  entdeckt,
  oxidationszahlen,
  gruppe,
  periode
) FROM 'chemische_elements_correct_version.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', NULL '');


##Tabellen anzeigen
$ \dt


##Alle Einträge anzeigen
$ SELECT * FROM pse_elements;


```

## Projekt kompilieren und starten

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
