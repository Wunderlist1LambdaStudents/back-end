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
| GET    | /api/users         | { "id": 123, "username": "Here", "password": "Here" } |
| GET    | /api/users:id      | { Requires ID ---> "id": 123, "username": "Here", "password": "Here" } |
| PUT    | /api/users:id      | { Requires ID ---> "username": "Here", "password": "Here" } |
| DELETE | /api/users:id      | { Requires ID ---> "message": "User Removed" } |

