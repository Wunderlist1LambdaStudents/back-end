# BackEnd-Map

Guidelines: "Make sure with all Post and Put Requests that you recreate the input id exactly as it is set up in the representation. The input body can be different, but IE This --> "name": "Here" has to be exact but "name": "Here" <-- Can be anything as long it is the same type of data (String/Integer)."

base URL: "https://bw-wunderlist2.herokuapp.com/"

### Login/Register

| Method | Endpoint      | Description/Requirements                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` using the information sent inside the `body` of the request. "username": "Here", <-- String "password": "Here", <-- String |
| POST   | /api/auth/login    | Requires a Register first. { "username": "Here", "password": "Here" } |

### User Endpoints

| Method | Endpoint      | Description/Requirements                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/users         | Visual Representation: { "id": 123, "username": "Here", "password": "Here" } |
| GET    | /api/users:id      | Visual Representation:Requires ID -> { "id": 123, "username": "Here", "password": "Here" } |
| GET    | /api/users:id/todos| Visual Representation:Requires ID -> {"id": 123, "title": "Go to the store", "description": "buy produce", "user_id": 123, "important": 1 or 0, "completed": 1 or 0, date_time: "date of the post ex."Wed May 27 2020 23:03:31 GMT-0500 (Central Daylight Time)" } |
| PUT    | /api/users:id      | { Requires ID ---> "username": "Here", "password": "Here" } |
| DELETE | /api/users:id      | { Requires ID ---> "message": "User Removed" } |

### Todos Endpoints


| Method | Endpoint      | Description/Requirements                                                                                                                                                                                                                                                            |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/todos         | Visual Representation: {"id": 123, "title": "Go to the store", "description": "buy produce", "user_id": 123, "important": 1 or 0, "completed": 1 or 0, date_time: "date of the post ex."Wed May 27 2020 23:03:31 GMT-0500 (Central Daylight Time)" } |
| GET    | /api/todos:id      | Visual Representation:Requires ID -> {"id": 123, "title": "Go to the store", "description": "buy produce", "user_id": 123, "important": 1 or 0, "completed": 1 or 0, date_time: "date of the post ex."Wed May 27 2020 23:03:31 GMT-0500 (Central Daylight Time)" } |
| PUT    | /api/todos:id      | Visual Representation:Requires ID -> {"id": 123, "title": "Go to the store", "description": "buy produce", "user_id": 123, "important": 1 or 0, "completed": 1 or 0, date_time: "date of the post ex."Wed May 27 2020 23:03:31 GMT-0500 (Central Daylight Time)" } |
| DELETE | /api/todos:id      | { Requires ID ---> "message": "todo Removed" } |

