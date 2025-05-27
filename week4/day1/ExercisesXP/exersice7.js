(function(username) {
  const navbar = document.getElementById('navbar');

  const userDiv = document.createElement('div');
  userDiv.classList.add('user-info');
  const profilePic = 'profile.png';

  userDiv.innerHTML = `
    <img src="${profilePic}" alt="Profile Picture">
    <span>Welcome, ${username}</span>
  `;

  navbar.appendChild(userDiv);
})('John');

