
CREATE TABLE compra (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT NOT NULL,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    burger_type TEXT,
    price REAL NOT NULL,
    specifications TEXT
);
