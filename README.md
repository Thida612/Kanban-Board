# Kanban-Board
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
Krazy Kanban Board is a web application that helps you manage tasks and projects using the Kanban methodology. It allows users to create, update, and delete tasks, and organize them into different states such as "Todo", "In Progress", and "Done".

## Features

- User authentication with JWT tokens
- Create, update, and delete tasks
- Organize tasks into different states
- Responsive design

## Project Structure
.vscode/ client/ .eslintrc.cjs .gitignore index.html package.json public/ src/ api/ authAPI.tsx ticketAPI.tsx userAPI.tsx App.tsx assets/ components/ index.css interfaces/ main.tsx pages/ utils/ vite-env.d.ts tsconfig.json tsconfig.node.json vite.config.ts LICENSE package.json README.md server/ .env db/ schema.sql package.json src/ controllers/ middleware/ models/ routes/ seeds/ server.ts types/ tsconfig.json tsconfig.json

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Kanban-Board.git
   cd Kanban-Board

   Collecting workspace information

Sure! Here is a detailed README for your Kanban Board project:

```md
# Krazy Kanban Board

Krazy Kanban Board is a web application that helps you manage tasks and projects using the Kanban methodology. It allows users to create, update, and delete tasks, and organize them into different states such as "Todo", "In Progress", and "Done".

## Features

- User authentication with JWT tokens
- Create, update, and delete tasks
- Organize tasks into different states
- Responsive design

## Project Structure

```
.vscode/
client/
  

.eslintrc.cjs


  .gitignore
  

index.html


  

package.json


  public/
  src/
    api/
      

authAPI.tsx


      

ticketAPI.tsx


      

userAPI.tsx


    

App.tsx


    assets/
    components/
    

index.css


    interfaces/
    

main.tsx


    pages/
    utils/
    

vite-env.d.ts


  

tsconfig.json


  

tsconfig.node.json


  

vite.config.ts


LICENSE


package.json




README.md


server/
  .env
  db/
    

schema.sql


  

package.json


  src/
    controllers/
    middleware/
    models/
    routes/
    seeds/
    

server.ts


    types/
  

tsconfig.json




tsconfig.json


```

## Installation

1. Clone the repository:
  
   git clone https://github.com/your-username/Kanban-Board.git
   cd Kanban-Board
   

2. Install dependencies:
   
   npm run install
   

3. Set up the database:
   - Create a PostgreSQL database and update the 

.env

 file in the 

server

 directory with your database credentials.
   - Run the database schema:
     
     psql -U your-username -d your-database -f server/db/schema.sql
     

4. Seed the database:
   
   npm run seed
   

## Development

To start the development server, run:

npm run start:dev


This will start both the client and server in development mode.

## Building

To build the project, run:

npm run build


## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to start managing your tasks.

## API Endpoints

### Authentication

- `POST /auth/login`: Log in a user

### Users

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a user by ID
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID

### Tickets

- `GET /api/tickets`: Get all tickets
- `GET /api/tickets/:id`: Get a ticket by ID
- `POST /api/tickets`: Create a new ticket
- `PUT /api/tickets/:id`: Update a ticket by ID
- `DELETE /api/tickets/:id`: Delete a ticket by ID

## License

This project is licensed under the MIT License. See the 

LICENSE

 file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)




