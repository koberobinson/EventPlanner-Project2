const createeventFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#event-name').value.trim();
  const city_id = document.querySelector('#city').value.trim();
  const category_id = document.querySelector('#category').value.trim();
  const date = document.querySelector('#date-time').value.trim();
  const user_id = document.querySelector('#user-id').value.trim();

  if (description && city_id && category_id && date && user_id) {
    const response = await fetch('/api/event/', {
      method: 'POST',
      body: JSON.stringify({ description, city_id, category_id, date, user_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/calendar');
    } else {
      alert(response.statusText);
      console.log(err);
    }
  }
};

document
  .querySelector('.createevent-form')
  .addEventListener('submit', createeventFormHandler);
