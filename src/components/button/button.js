document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        window.alert('clicked');
    });
});