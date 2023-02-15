# Hospital_Bill_Project
  Implementing Api that has two  endpoints using 
  - Language: Node
  - Framework: Express
  
  Two endpoints  are :
  -  GET /items: returns a list of medical bills
  -  POST /items: creates a new medical bill

  A medical bill has the following properties:

   - patient name and address

   - the hospital name

   - date of service

   - bill amount.

# Instructions to start App locally :

  #### prerequistes
    Install Node ,  Express 

  ```
  # Clone the repository
  $ git clone https://github.com/ManishGovind/Bill_project_API.git
  ```
  ```
  # change the directory to API
  $ cd API/
  ```
  ```
  # To initialise the project npm packages 
  $ npm init
  ```
  ```
  # start the server by running following command 
  $ node app.js
  ```
 ```
 The server will be running at 
 http://localhost:3000/
 ```
 # The EndPoints of API
 
 GET REQUEST TO FETCH ALL THE BILLS
  - http://localhost:3000/bills/items
 
 POST REQUEST TO CREATE THE BILL
  - http://localhost:3000/bills/items
  ```
  # request body parameters 
      {
    "patient_name" : string,
    "address" : string,
    "hospital name" : string,
    "service_date":  string,
    "bill_amount" : string
    }
  ```