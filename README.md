# Kanban-Board
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
Krazy Kanban Board is a web application that helps you manage tasks and projects using the Kanban methodology. It allows users to create, update, and delete tasks, and organize them into different states such as "Todo", "In Progress", and "Done".

## Features

- User authentication with JWT tokens
- Create, update, and delete tasks
- Organize tasks into different states
- Responsive design



## Installation

1. Clone the repository:
  
git clone https://github.com/thida612/Kanban-Board.git
cd Kanban-Board
   

2. Install dependencies:
   npm run install
   

3. Set up the database:
- Create a PostgreSQL database and update the 
.env file in the server directory with your database credentials.

- Run the database schema:psql -U your-username -d your-database -f server/db/schema.sql
psql -U your-username -d your-database -f server/db/schema.sql
     

4. Seed the database:
   npm run seed
   

## Development

To start the development server, run: npm run start:dev<br>
This will start both the client and server in development mode.

## Building

To build the project, run: npm run build


## Usage

1. Open your browser and navigate to `http://localhost:3001`.
2. Register or log in to start managing your tasks.



## License
MIT

## Credit
Andres(tutor) help with login authentication<br>
Charlie Werness(instructor) & Austin Slater (TA) Help with render


## Deployed link
https://kanban-board01-u3vy.onrender.com<br><br>


![Screenshot 1](/client/public/screenshot1.png)<br><br><br>

![Screenshot 1](/client/public/screenshot2.png)<br><br><br>

![Screenshot 1](/client/public/screenshot3.png)







