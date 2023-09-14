async function fetchDataFromTwoAPIs() {
    const Url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const Url2 = 'https://jsonplaceholder.typicode.com/posts/1';
  
    try {
      const [todoResponse, postResponse] = await Promise.all([fetch(Url1), fetch(Url2),]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error('Network response was not ok');
      }
  
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchDataFromTwoAPIs();
  