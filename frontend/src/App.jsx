import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api')
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error('Error msg:',error));
  }, []);

  return (
    <div>
      <h1>Message from backend</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;