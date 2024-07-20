

// index.js

function addingEventListener() {
  const button = document.getElementById('button');
  if (button) {
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  }
}

// Export the function if you need to require it in your test file
module.exports = { addingEventListener };
