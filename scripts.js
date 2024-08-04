function showResponse(answer) {
    var responseDiv = document.getElementById('response');
    var animationsDiv = document.getElementById('animations');
    var poemDiv = document.getElementById('poem');

    responseDiv.classList.remove('hidden');

    if (answer === 'yes') {
        responseDiv.innerHTML = 'You are going to love it';
    } else {
        responseDiv.innerHTML = 'You don’t have a choice';
    }

    setTimeout(function() {
        responseDiv.classList.add('hidden');
        animationsDiv.classList.remove('hidden');

        // Simulate animation display
        setTimeout(function() {
            animationsDiv.classList.add('hidden');
            poemDiv.classList.remove('hidden');
        }, 5000); // 5 seconds to simulate animations
    }, 2000); // 2 seconds to display initial message
}