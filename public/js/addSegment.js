const submitAdventure = document.getElementById('submit-segment');
const storyTitle = document.getElementById('storyTitle')

console.log('test1')
console.log(submitAdventure)
const createNewStory = (event) =>{
  console.log('test2')
  event.preventDefault();
const adventureContent = quill.root.innerHTML;
fetch('/submitNewStory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({story_title: storyTitle.value, segment_content: adventureContent})
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