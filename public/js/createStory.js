//here is the js for the adventureModeNew.handlebars
// specifically to save their Quill input to our storySegment db
const submitAdventure = document.getElementById('submit-adventure');
const storyTitle = document.getElementById('storyTitle')
const genreId = document.getElementById('genreId');
const promptId = document.getElementById('promptId')


const createNewStory = (event) =>{
  event.preventDefault();
const adventureContent = quill.root.innerHTML;



fetch('/submitNewStory', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      { story_title: storyTitle.value, 
        segment_content: adventureContent,
        prompt_id: promptId.value,
        genre_id: genreId.value,
      }
    )
})

 .then(response => {
    if (response.ok) {
      console.log('Content saved successfully');
      event.preventDefault();
      document.location.replace ('/homepage');
    } else {
      console.error('Failed to save content');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
};



submitAdventure.addEventListener('click', createNewStory);
