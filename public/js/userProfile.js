//saves the Quill input for the user bio!

document.addEventListener('DOMContentLoaded', (event) => {
    const quill = new Quill('#editor', {
        theme: 'snow'
    });

    // Load saved content from localStorage
    const savedContent = localStorage.getItem('quill-content');
    if (savedContent) {
        quill.root.innerHTML = savedContent;
    }

    document.getElementById('save-button').addEventListener('click', function() {
        const editorContent = quill.root.innerHTML;
        localStorage.setItem('quill-content', editorContent);
        console.log('Content saved:', editorContent);
        return;
    });
});