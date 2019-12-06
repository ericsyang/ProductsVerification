## Assignment
--------------
#### Introdution and Requirement
Create a Cloud Function to process a file uploaded to a bucket via API Call. The file will contain a list of products by departments and the function should process the file and save it to two different buckets: one for valid and one for invalid products. Your output files should keep the original structure of the input file.
 
A product is valid if:
 
    * it has a description
    * the price is a number
    * UPC is a 12 digit number
 
#### Preparation

Using Azure Functions

Start from here [Create your first function using Visual Studio Code
](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code)


#### IDE

[Visual Studio Code](https://code.visualstudio.com/)

#### API Doc
Below are the APIs available and their brief description, see api def for the response structure

- {base path}//api/products?validProduct=true
    - body: product.json
- return: valid product
```json
{
  "Grocery": [
    {
      "description": "Grocery product 1",
      "price": 13.6,
      "upc": "218189466108"
    },
    {
      "description": "Grocery product 2",
      "price": 9.96,
      "upc": "566059936467"
    },
    {
      "description": "Grocery product 3",
      "price": 2.54,
      "upc": "997816853299"
    },
    {
      "description": "Grocery product 4",
      "price": 7.93,
      "upc": "276070343730"
    },
    {
      "description": "Grocery product 7",
      "price": 14.43,
      "upc": "157816204662"
    },
    {
      "description": "Grocery product 8",
      "price": 3.16,
      "upc": "595237349270"
    },
    {
      "description": "Grocery product 9",
      "price": 10.69,
      "upc": "432514793084"
    },
    {
      "description": "Grocery product 10",
      "price": 8.2,
      "upc": "946525255184"
    }
  ],
  "Bakery": [
    {
      "description": "Bakery product 1",
      "price": 1.37,
      "upc": "567636998373"
    },
    {
      "description": "Bakery product 2",
      "price": 18.86,
      "upc": "451648843113"
    },
    {
      "description": "Bakery product 4",
      "price": 8.35,
      "upc": "923354989671"
    },
    {
      "description": "Bakery product 5",
      "price": 12.67,
      "upc": "713645584124"
    },
    {
      "description": "Bakery product 6",
      "price": 12.98,
      "upc": "406014281624"
    },
    {
      "description": "Bakery product 7",
      "price": 1.21,
      "upc": "997414436184"
    },
    {
      "description": "Bakery product 8",
      "price": 10.67,
      "upc": "365435960405"
    },
    {
      "description": "Bakery product 9",
      "price": 12.45,
      "upc": "326818768841"
    },
    {
      "description": "Bakery product 10",
      "price": 0.16,
      "upc": "891699151933"
    }
  ]
}
```
- {base path}//api/products?validProduct=false
    - body: product.json
- return: invalid product
```json
{
  "Grocery": [
    {
      "price": 17.58,
      "upc": "936692366578"
    },
    {
      "description": "Grocery product 6",
      "price": null,
      "upc": "218443288774"
    }
  ],
  "Bakery": [
    {
      "description": "Bakery product 3",
      "price": 5.27,
      "upc": "ABC"
    }
  ]
}
```

#### Test in local

1. To test this function, set a breakpoint in the function code and press F5 to start the function app project. Output from Core Tools is displayed in the Terminal panel.

2. Paste the URL for the HTTP request into your Postman and paste product.json to your request body 

#### CMD
 - Run Jest Testing: `yarn test `
 - Run watch mode: `yarn watch`