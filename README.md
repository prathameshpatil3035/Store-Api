# Store-Api

Store App
Welcome to the Store App! This application provides APIs for filtering and pagination of store products.

#Requirements
Node.js v16
APM (Automated Package Manager) for installing dependencies: npm i --legacy-peer-deps

#Installation

Clone the repository:
git clone https://github.com/prathameshpatil3035/Store-Api.git

Install dependencies:
npm install

Start the server:
npm start

#Usage
API Endpoint
Endpoint: /api/v1/products
Method: GET

#Example cURL request:

curl --location 'localhost:3000/api/v1/products?sort=-name&fields=name%2Cprice%2Crating&numericFilters=price%3C50%2Crating%3C4.5'

#Query Parameters
page: Page number for pagination (default: 1)
limit: Number of items per page (default: 10)
sort: Sorting order (-name for descending, name for ascending)
fields: Fields to include in the response
numericFilters: Numeric filters for price and rating

#Dependencies
dotenv: Environment variable management
express: Web framework for Node.js
express-async-errors: Error handling for async functions in Express
http-status-codes: HTTP status codes mapping
mongoose: MongoDB object modeling tool
nodemon: Auto-restart server on file changes (development dependency)
