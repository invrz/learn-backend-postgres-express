## RESTful APIs in Detail

### Setting up Postman on Your Local Machine

Before we dive into RESTful API development, let's set up **Postman** on your local machine. Postman is a popular API testing tool that allows you to send HTTP requests to your API endpoints and inspect the responses.

1. **Install Postman:** Download and install Postman from the official website.

   [Download Postman](https://www.postman.com/downloads/)

2. **Launch Postman:** After installation, launch Postman on your machine.

3. **Create a New Workspace:** You can create a new workspace or use an existing one to organize your API requests.

### HTTP Methods and API Requests

#### GET Request

**HTTP GET** requests are used to retrieve data from a server. In your messaging app project, you can create a route to handle a GET request, which retrieves a list of messages.

**Express Route for Handling GET Request:**

```javascript
app.get('/api/messages', (req, res) => {
  // Handle the GET request to retrieve messages
  // Example: Retrieve messages for the user with userId=req.query.userId
  const messages = ...; // Retrieve messages from your data source
  res.json(messages); // Send a JSON response with messages
});
```

#### POST Request

**HTTP POST** requests are used to send data to a server to create or update a resource. For example, you can create a route to handle a POST request for adding a new message.

**JSON Request Object for POST:**

```json
{
  "userId": "123",
  "content": "Hello, World!"
}
```

**Express Route for Handling POST Request:**

```javascript
app.post('/api/messages', (req, res) => {
  // Handle the POST request to add a new message
  // Example: Create a new message with content=req.body.content for userId=req.body.userId
  const newMessage = ...; // Create a new message and store it
  res.json(newMessage); // Send a JSON response with the new message
});
```

#### PUT Request

**HTTP PUT** requests are used to update an existing resource. You can create a route to handle a PUT request for updating a message.

**JSON Request Object for PUT:**

```json
{
  "messageId": "456",
  "content": "Updated message content"
}
```

**Express Route for Handling PUT Request:**

```javascript
app.put('/api/messages', (req, res) => {
  // Handle the PUT request to update a message
  // Example: Update the message with messageId=req.body.messageId with new content=req.body.content
  const updatedMessage = ...; // Update the message and store it
  res.json(updatedMessage); // Send a JSON response with the updated message
});
```

#### DELETE Request

**HTTP DELETE** requests are used to delete a resource. Create a route to handle a DELETE request for removing a message.

**JSON Request Object for DELETE:**

```json
{
  "messageId": "789"
}
```

**Express Route for Handling DELETE Request:**

```javascript
app.delete('/api/messages', (req, res) => {
  // Handle the DELETE request to remove a message
  // Example: Delete the message with messageId=req.body.messageId
  // No need to send a response body for successful DELETE operations
  // You can send a success message or status code 204 (No Content)
  // res.sendStatus(204);
});
```

### Postman Testing

1. Open Postman and create a new request.
2. Select the HTTP method you want to test (GET, POST, PUT, DELETE).
3. Enter the URL for your local API endpoint (e.g., `http://localhost:3000/api/messages`).
4. Set the request headers and the request body using the JSON request objects provided above.
5. Click the "Send" button to make the request.
6. Inspect the response in Postman to verify that your API is correctly handling the request and returning the expected data.

By implementing and testing these API routes, you'll gain a deep understanding of how to handle different HTTP methods and interact with your messaging app's backend.

---

You're now well-equipped to work with RESTful APIs using various HTTP methods and Postman for testing. In the next modules, we'll continue building upon these foundations to create a fully functional messaging app backend. Stay tuned for more hands-on coding and advanced functionalities!