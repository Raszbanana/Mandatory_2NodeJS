async function verifyUser(email, password) {
  console.log(email, password)
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      if (!json.token) {
        console.log('Invalid credentials');
      } else {
        localStorage.setItem('token', json.token);
        const token = localStorage.getItem('token');
        console.log(token)
        
      }
    });
}

export default verifyUser;

