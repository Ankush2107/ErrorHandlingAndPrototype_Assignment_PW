function fetchDataFromAPI() {
    const Url = 'https://jsonplaceholder.typicode.com/todos/1';
  
    fetch(Url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data from the API:', data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
}
  
fetchDataFromAPI();
  