//here is the js for the adventureModeNew.handlebars
// specifically to save their Quill input to our storySegment db
const submitAdventure = document.getElementById('submit-adventure');
console.log('test1')
console.log(submitAdventure)
const createNewStory = (event) =>{
  console.log('test2')
  event.preventDefault();
const adventureContent = quill.root.innerHTML;
fetch('/api/createStory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: adventureContent})
})
 .then(response => {
    if (response.ok) {
      console.log('Content saved successfully');
    } else {
      console.error('Failed to save content');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

submitAdventure.addEventListener('click', createNewStory)
