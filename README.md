# Todo-list-app

This is a simple todo list application

The app is built by NextJS, TypeScript and Tailwindcss.

## Getting Started

First, install the dependencies:

```bash
npm install
```


Run the development server:

```bash
# start json-server mock backend
npx json-server --watch -p 3001 data/db.json


# start server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

# REST API
## Get all todos

### Request
`GET /todos/`
```bash
curl -i -H 'Accept: application/json' http://localhost:3001/todos/
```
### Response

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Content-Length: 314
ETag: W/"13a-IEbRRq4jka2uDiW16TITqXI6jN0"
Date: Tue, 02 May 2023 22:39:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[
  {
    "id": 1,
    "title": "Task one",
    "complete": true,
    "created_at": "May, 2nd 2023"
  },
  {
    "id": 2,
    "title": "Task two",
    "complete": true,
    "created_at": "May, 2nd 2023"
  },
  {
    "id": 3,
    "title": "Task three",
    "complete": false,
    "created_at": "May, 2nd 2023"
  }
]
```


## Add todo 

### Requst


`POST /todos/`


```bash

curl -i -H 'Accept: application/json' -d 'title=Test&complete=False&created_at=May, 2nd 2023' http://localhost:3001/todos
```


### Response

```bash 
HTTP/1.1 201 Created
X-Powered-By: Express
Vary: Origin, X-HTTP-Method-Override, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
Access-Control-Expose-Headers: Location
Location: http://localhost:3001/todos/4
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Content-Length: 88
ETag: W/"58-pCc0mp4aIKP6iGhM6idN8VPH4Cg"
Date: Tue, 02 May 2023 22:40:01 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
  "title": "Test",
  "complete": "False",
  "created_at": "May, 2nd 2023",
  "id": 4
}
 
```


