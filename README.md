# Getting started
1. Fork and Clone this repository.
2. Create a .env file INSIDE the server directory
3. You will need to create your own database where you want the files inside the server to migrate/seed into. I used a dockerized image of pg for the database.
4. Paste 'DB_CONNECTION_STRING=postgresql://USERNAME:PASSWORD@LOCALHOST:5432/yourDBname' inside your .env file. Make sure to replace the necessary information to connect to your db.
You will now be able to start the app with no issues.

# Starting the app
1. CD into the client
2. RUN npm i
3. Repeat steps 1 and 2 for the server folder
4. While inside the server folder, run: npm start-app. This will setup your DB will all necessary information and keep your server running with nodemon.
5. While inside the client folder, run: npm start to startup the application.

# Using the app
There are two default accounts you can log into. \
Username: MikeW \
Password: !@#$1234 \
\
Username: JamesS \
Password: !@#$1234 \
\
You can also create your own account. \
You can also login as a guest. \
\
If you want to restart the DB. Run: npm run start-dev

