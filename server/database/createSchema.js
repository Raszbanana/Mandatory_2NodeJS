import db from "./createConnection.js";

// const isInDeleteMode = true;

// if (isInDeleteMode) {
//   db.exec("DROP TABLE IF EXISTS players;");
// }

db.exec(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(70),
    description VARCHAR(255),
    price INTEGER,
    quantity INTEGER
);`);

// Seed

// db.run("insert into items (name, description, price, quantity) VALUES ('KEA-Mug', 'A mug made by keas own students', 299, 10)")
// db.run("insert into items (name, description, price, quantity) VALUES ('KEA-Towel', 'Towel made by kea', 239, 12)")
