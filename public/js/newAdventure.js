document.addEventListener('DOMContentLoaded', function () {
    const adventureModeNew = document.getElementById('adventure-mode-startnew');
    const adventureModeJoinOngoing = document.getElementById('adventure-mode-ongoing');

    adventureModeNew.addEventListener('click', function () {
        window.location.href = '/adventureModeNew';
    });

    adventureModeJoinOngoing.addEventListener('click', function () {
        window.location.href = '/adventureModeOngoing';
    });
});