
CREATE TABLE User (
  uid SERIAL PRIMARY KEY,
  name VARCHAR(64),
  email VARCHAR(64) PRIMARY KEY,
  password VARCHAR(64),
  contacts JSONB[]
);

CREATE TABLE Messages (
  uid SERIAL PRIMARY KEY,
  "from" VARCHAR(64) REFERENCES User(email),
  "to" VARCHAR(64),
  timestamp TIMESTAMP,
  message VARCHAR(480)
);

