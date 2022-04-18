async function verifyUser(email, password) {
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
      if (!json.token) {
        return json;
      } else {
        localStorage.setItem('token', json.token);
        const token = localStorage.getItem('token');
        return token;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default verifyUser;
