
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const wishes = document.getElementById('wishes').value;

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = <p>Спасибо, ${name}! Ваши пожелания были отправлены.</p>; 
});
