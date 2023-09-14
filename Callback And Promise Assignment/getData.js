const Url = 'https://jsonplaceholder.typicode.com/posts';

fetch(Url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Posts:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
});
