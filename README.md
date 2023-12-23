# Blogging Platform API Testing Documentation

This documentation provides a guide for testing the essential functionalities of the Blogging Platform API. The API is built using Node.js, Express.js, and MongoDB, and it serves as the backend for a simple blogging platform.

```plaintext
BASE_URL: http://http://65.0.29.120:3000
```

## Authentication

### 1. User Registration

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Expected Response:** Status Code 201 (Created)

### 2. User Login

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Expected Response:** Status Code 200 (OK)

## Blog Posts

### 3. Create a Blog Post

- **Endpoint:** `/api/posts`
- **Method:** `POST`
- **Authorization:** Bearer Token (Obtained after login)
- **Request Body:**

  ```json
  {
    "title": "Your Blog Post Title",
    "content": "Your blog post content."
  }
  ```

- **Expected Response:** Status Code 201 (Created)

### 4. Get All Blog Posts

- **Endpoint:** `/api/posts`
- **Method:** `GET`
- **Authorization:** None
- **Expected Response:** Status Code 200 (OK)

### 5. Update a Blog Post

- **Endpoint:** `/api/posts/:postId`
- **Method:** `PUT`
- **Authorization:** Bearer Token
- **Request Body:**

  ```json
  {
    "title": "Updated Blog Post Title",
    "content": "Updated blog post content."
  }
  ```

- **Expected Response:** Status Code 200 (OK)

### 6. Get a Blog Post by ID

- **Endpoint:** `/api/posts/:postId`
- **Method:** `GET`
- **Authorization:** None
- **Expected Response:** Status Code 200 (OK)

### 7. Delete a Blog Post

- **Endpoint:** `/api/posts/:postId`
- **Method:** `DELETE`
- **Authorization:** Bearer Token
- **Expected Response:** Status Code 204 (No Content)

## Error Handling

### 8. Invalid Request

- **Scenario:** Missing required data in requests.
- **Expected Response:** Status Code 400 (Bad Request)

### 9. Unauthorized Access

- **Scenario:** Accessing protected routes without proper authentication.
- **Expected Response:** Status Code 401 (Unauthorized)

### 10. Rate Limiting

- **Scenario:** Making too many requests within a short timeframe.
- **Expected Response:** Status Code 429 (Too Many Requests)

---