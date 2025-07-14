## Beschreibung

Dieses Projekt ist eine NestJS-Anwendung zur Verwaltung des Periodensystems der Elemente mit einer PostgreSQL-Datenbank.
Das dazugehörige Frontend findest du [hier](https://github.com/Marc-Schaar/pse_frontend).

## Voraussetzungen

Bevor du das Projekt einrichtest, stelle sicher, dass folgende Software auf deinem System installiert ist:

### System

- macOS (getestet mit macOS)
- Terminal (Zsh oder Bash)

### Software

- Node.js ≥ 18.x
- PostgreSQL 16.x
- Git ≥ 2.x

## Projekt clonen

```bash
git clone https://github.com/Marc-Schaar/pse_backend.git
cd pse_backend
```

## Projekt einrichten

```bash
$ npm install
```

## PostgreSQL Installieren (optional, falls nicht vorhanden)

### MacOS

```bash
$ brew install postgresql@16
$ brew services start postgresql@16

```

### Windows

https://www.postgresql.org/download/windows/

## Datenbank einrichten

```bash
$ createdb pse_element_db
$ createuser testuser
$ psql -d postgres


```

### Rechte vergeben

```bash
$ ALTER USER testuser WITH PASSWORD 'testpassword';
$ GRANT ALL PRIVILEGES ON DATABASE pse_element_db TO testuser;
$ ALTER USER testuser WITH SUPERUSER;
\q

```

## .env-Datei anlegen

Lege im Backend-Verzeichnis eine .env-Datei an mit den Datenbankverbindungsinformationen, z.B.:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=testuser
DB_PASSWORD=testpassword
DB_DATABASE=pse_element_db

```

## Mit Datenbank verbinden

```bash
$ psql -h localhost -U testuser -d pse_element_db

```

## Tabele formatieren

```sql
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
  gruppe FLOAT,
  periode INTEGER
);

```

## Importiere die Tabellen und Daten

```sql
\copy pse_elements (
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

# > Hinweis: Die Datei `chemische_elements_correct_version.csv` muss im selben Verzeichnis liegen, in dem du `psql` gestartet hast. Sonst gib den Pfad absolut oder relativ an.

```

## Datenbank prüfen

```bash
## Tabellen anzeigen
$ \dt

## Alle Einträge anzeigen
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
