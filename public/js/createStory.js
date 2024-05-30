// event listeners connected to appropriate modals in createStory.handlebars to take you to pages to participate in the story style you choose

document.addEventListener('DOMContentLoaded', function () {
    const rapidFireStartNew = document.getElementById('rapid-start-new');
    const rapidFireJoinOngoing = document.getElementById('rapid-ongoing');
    const adventureModeNew = document.getElementById('adventure-mode-startnew');
    const adventureModeJoinOngoing = document.getElementById('adventure-mode-ongoing');


    rapidFireStartNew.addEventListener('click', function () {
        window.location.href = '/rapidFireRoundNew';
    });

    rapidFireJoinOngoing.addEventListener('click', function () {
        window.location.href = '/rapidFireRoundOngoing'; 
    });

    adventureModeNew.addEventListener('click', function () {
        window.location.href = '/adventureModeNew'; 
    });

    adventureModeJoinOngoing.addEventListener('click', function () {
        window.location.href = '/adventureModeOngoing'; 
    });
});
