document.addEventListener('DOMContentLoaded', (event) => {
    const quill = new Quill('#editor', {
        theme: 'snow'
    });

    const savedContent = localStorage.getItem('quill-content');
    if (savedContent) {
        quill.root.innerHTML = savedContent;
    }
    document.getElementById('save-button').addEventListener('click', function () {
        const userContent = quill.root.innerHTML;
        fetch('/api/userRoutes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: userContent })
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
        localStorage.setItem('quill-content', userContent);
        console.log('Content saved:', userContent);
    });
});
