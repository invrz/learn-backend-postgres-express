## SQL and Database Queries

### Writing SQL Queries to Retrieve, Insert, Update, and Delete Data

SQL (Structured Query Language) is a powerful tool for interacting with relational databases like PostgreSQL. In this module, we will learn how to write SQL queries to perform essential database operations, all examples are in context of messages tables from the database we made in earlier modules.

#### Retrieving Data (SELECT):

1. **Retrieve all messages from a specific user to another user:**

   ```sql
   SELECT * FROM Messages WHERE "from" = 'user1@example.com' AND "to" = 'user2@example.com';
   ```

2. **Retrieve the most recent messages between two users, sorted by timestamp in descending order:**

   ```sql
   SELECT * FROM Messages WHERE ("from" = 'user1@example.com' AND "to" = 'user2@example.com') OR ("from" = 'user2@example.com' AND "to" = 'user1@example.com') ORDER BY timestamp DESC;
   ```

#### Inserting Data (INSERT):

To insert a new message into the `Messages` table:

```sql
INSERT INTO Messages ("from", "to", timestamp, message) 
VALUES ('user1@example.com', 'user2@example.com', NOW(), 'Hello, user2!');
```

#### Updating Data (UPDATE):

To update the content of a specific message:

```sql
UPDATE Messages
SET message = 'Updated message content'
WHERE "from" = 'user1@example.com' AND "to" = 'user2@example.com'
  AND timestamp = '2023-08-30 14:00:00';
```

#### Deleting Data (DELETE):

To delete a specific message:

```sql
DELETE FROM Messages
WHERE "from" = 'user1@example.com' AND "to" = 'user2@example.com'
  AND timestamp = '2023-08-30 14:00:00';
```

These SQL examples demonstrate how to retrieve, insert, update, and delete data in the context of the `Messages` table within your PostgreSQL database.

### Parameterized Queries and Preventing SQL Injection

Parameterized queries are essential for security and preventing SQL injection attacks. We will explore how to use parameterized queries in PostgreSQL to ensure that user input is properly sanitized and secure.

Example of a parameterized query:

```sql
INSERT INTO Messages ("from", "to", timestamp, message)
VALUES ($1, $2, $3, $4);
```

### Building a Chat Functionality Example

As the final example, we'll create a chat functionality using Express.js, PostgreSQL, and the schema you provided. We will create two routes:

1. **POST /sendmessage:** This route will allow users to send messages to each other.

   Request:
   ```json
   {
     "from": "messageFromEmail",
     "to": "messageToEmail",
     "message": "messageContents"
   }
   ```

   Response:
   ```json
   {
     "success": true
   }
   ```

2. **GET /retrievemessages:** This route will retrieve messages between two users.

   Request:
   ```json
   {
     "from": "messageFromEmail",
     "to": "messageToEmail"
   }
   ```

   Response:
   ```json
   {
     "messages": [
       { "email": "from/to", "message": "messageContents" }
     ]
   }
   ```

### Express.JS Implementation of the above routes
Certainly! Let's implement the Express.js routes for sending and retrieving messages in the chat functionality example:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  user: '<username>',
  host: 'localhost',
  database: 'mapp',
  password: '<password>',
  port: 5432,
});

// POST /sendmessage
app.post('/sendmessage', (req, res) => {
  const { from, to, message } = req.body;

  // Insert the message into the Messages table
  pool
    .query(
      'INSERT INTO Messages ("from", "to", timestamp, message) VALUES ($1, $2, NOW(), $3)',
      [from, to, message]
    )
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      console.error('Error sending message:', err);
      res.status(500).json({ success: false, error: 'Error sending message' });
    });
});

// GET /retrievemessages
app.get('/retrievemessages', (req, res) => {
  const { from, to } = req.query;

  // Retrieve messages between two users
  pool
    .query(
      'SELECT "from", message FROM Messages WHERE "from" = $1 AND "to" = $2 OR "from" = $2 AND "to" = $1',
      [from, to]
    )
    .then(result => {
      const messages = result.rows.map(row => ({
        email: row.from,
        message: row.message,
      }));
      res.json({ messages });
    })
    .catch(err => {
      console.error('Error retrieving messages:', err);
      res.status(500).json({ error: 'Error retrieving messages' });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

This code sets up two Express.js routes:

1. **POST /sendmessage:** This route allows users to send messages. It inserts the message into the PostgreSQL database.

2. **GET /retrievemessages:** This route retrieves messages between two users based on their email addresses.

Make sure to replace `<username>` and `<password>` with your PostgreSQL database credentials. With these routes in place, your messaging app can send and retrieve messages between users.

---

By the end of this module, you'll have a strong grasp of SQL and database queries, how to prevent SQL injection, and how to use Knex.js as a query builder for PostgreSQL.