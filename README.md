# Mandatory_2NodeJS
Welcome to my project, this is merely meant to be a brief read. Mostly also for myself to remember what i need to work on.

# To run
// Server
- Run createSchema.js before initalizing the server
- Move the items.db to the server folder (I really wish i knew how to autocomplete this step)
- Run app.js

// Client
- npm run dev

# TO DO
- Fix nodemailer unable to fetch accessToken using refresh token (I was foolish and tried my way with gmail using the OAuth2 client)
- Refresh Shop page upon user login (and signout?) It is a problem because if the user opens the login modal and logs in from the shop page, he/she will have to refresh it to run the fetch items request
- Fix possible SQL injection exploits in the database queries
- Add authLimiter to login requests
- If a user tries to send requests to the API without a token, the request will just keep processing, need to implement a status code responds that says no authorization 


