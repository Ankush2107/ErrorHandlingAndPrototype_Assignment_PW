// Define the URL of the API (with a non-existent post ID to simulate an error)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Post:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
