const loutbtn = document.querySelector('#logoutbtn');

const logout = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

loutbtn.addEventListener("click", logout)