# Express/Mongoose Example API

| Enpdoint         | Description                       | Request Type | Request Body | Response |
| ---------------- | --------------------------------- | ------------ | ------------ | -------- |
| /user/:username | Get a user from the database  | GET          | N/A          | ```{"_id": "...", "username": "...", "password": "...", "age": "...", "_v": "..."}``` |
| /user/add | Add a user to the database  | POST          | ```{"username": "...", "password": "...", "age": "..."}```          | ```{"_id": "...", "username": "...", "password": "...", "age": "...", "_v": "..."}``` |
| /user/:username | Update a user's info in the database  | PUT          | ```{"username": "...", "password": "...", "age": "..."}``` (all fields in this object are optional)         | ```{"_id": "...", "username": "...", "password": "...", "age": "...", "_v": "..."}``` |
| /user/:username | Delete a user from the database  | DELETE          | N/A     | ```{"n": 1,"ok": 1}``` |
