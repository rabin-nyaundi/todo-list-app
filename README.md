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
{
    "id": 4,
    "title": "Test",
    "complete": false,
    "created_at": "May, 2nd 2023"
}
 
```


