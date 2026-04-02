# Backend Items API

I built this project to understand how backend APIs work using Node.js. 
It performs basic operations using a JSON file as storage.

##  Features
- Get all items
- Add a new item
- Delete an item
- JSON file used as database
- Basic error handling

##  Tech Stack
- Node.js
- Express.js

## Project Structure
backend-project/
│
├── data/
│   └── items.json
├── server.js
├── package.json

##  How to Run

1. Install dependencies:
npm install

2. Start the server:
node server.js

3. Open in browser or Postman:
http://localhost:3000/items

##  API Endpoints

GET /items  
→ Fetch all items  

POST /items  
→ Add a new item  

DELETE /items/:id  
→ Delete an item  

##  Testing
Tested using Postman by sending GET, POST, and DELETE requests.

##  Author
Kabir Khan