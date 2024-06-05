const savebtn = document.getElementById('save-bio-button');
const userBioEditor = document.getElementById('bio-editor');
const inputElement = document.querySelector('input[data-formula="e=mc^2"][data-link="https://quilljs.com"][data-video="Embed URL"]');

if (inputElement) {
  inputElement.remove();
} else {
  console.log("Input element not found.");
}


const submitUserBio = async (event) => {
  try {
    const userBio = userBioEditor.innerHTML;
    const response = await fetch('/userProfile/submitUserBio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: userBio })
    });

    if (response.ok) {
      console.log('Content saved successfully');
      window.location.reload();
    } else {
      console.error('Failed to save content');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

savebtn.addEventListener('click', submitUserBio);