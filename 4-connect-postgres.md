## Masterclass: Using PostgreSQL as a Database

### Introduction to Relational Databases and PostgreSQL

**Relational databases** are a type of database management system (DBMS) that organize data into structured tables with rows and columns. These databases are ideal for managing structured data with relationships between different entities.

**PostgreSQL** is a powerful, open-source relational database management system known for its reliability, performance, and extensibility. It supports complex queries, transactions, and is an excellent choice for applications requiring data integrity.

### Configuring PostgreSQL for the Messaging App

To configure PostgreSQL for the messaging app, follow these steps:

1. **Install PostgreSQL:** Download and install PostgreSQL from the official website.

   [PostgreSQL Downloads](https://www.postgresql.org/download/)

2. **Create a Database:** Using the PostgreSQL command-line tool (e.g., `psql`), create a new database named `mapp` for your messaging app.

   ```sql
   CREATE DATABASE mapp;
   ```

3. **Set Up a User:** Create a user and assign it to the `mapp` database. Replace `<username>` and `<password>` with your preferred username and password.

   ```sql
   CREATE USER <username> WITH PASSWORD '<password>';
   ALTER ROLE <username> SET client_encoding TO 'utf8';
   ALTER ROLE <username> SET default_transaction_isolation TO 'read committed';
   ALTER ROLE <username> SET timezone TO 'UTC';
   GRANT ALL PRIVILEGES ON DATABASE mapp TO <username>;
   ```

4. **Schema Setup:** Now, we'll create the schema for your messaging app in a `.sql` file.

### Creating Schema in a .sql File

Here's an example of the schema for your messaging app:

```sql
-- Create the User table
CREATE TABLE User (
  uid SERIAL PRIMARY KEY,
  name VARCHAR(64),
  email VARCHAR(64) PRIMARY KEY,
  password VARCHAR(64),
  contacts JSONB[]
);

-- Create the Messages table
CREATE TABLE Messages (
  uid SERIAL PRIMARY KEY,
  "from" VARCHAR(64) REFERENCES User(email),
  "to" VARCHAR(64),
  timestamp TIMESTAMP,
  message VARCHAR(480)
);
```

Save this schema in a `.sql` file, e.g., `mapp_schema.sql`. This file will be used to create the database tables.

### Using the Schema to Create the Database and Connect It to the Messaging App

Now that we have the schema defined in a `.sql` file, we can use it to create the database tables and connect them to the messaging app.

1. **Run Schema Script:** Use the PostgreSQL command-line tool to run the schema script and create the tables in the `mapp` database.

   ```bash
   psql -U <username> -d mapp -a -f mapp_schema.sql
   ```

   Replace `<username>` with the username you created earlier.

2. **Database Connection in the Messaging App:** In your messaging app's Node.js code, set up a database connection using a library like `pg` driver. Establish the connection with the PostgreSQL database and configure the connection details. to do this, first install `pg` in your node project by using command:
   ```javascript
   npm install pg
   ```
   After this, create a new file called `database.js` where your `app.js`/`server.js` is located and add the following in there:

   ```javascript
   const { Pool } = require('pg');

   const pool = new Pool({
     user: '<username>',
     host: 'localhost',
     database: 'mapp',
     password: '<password>',
     port: 5432,
   });

   module.exports = pool
   ```

   Replace `<username>` and `<password>` with the database user credentials you set up.

   Once done, open your `app.js`/`server.js` and import the new pool we made in `database.js` by adding this line to your code:

   ```javascript
   const pool = require("./database");
   ```

With this setup, your messaging app will be able to interact with the PostgreSQL database to store and retrieve user information and messages.

---

You've now successfully configured PostgreSQL for your messaging app, created the database schema, and established a connection between the app and the database.