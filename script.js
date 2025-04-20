function updateBackgrounds(value) {
    const defaultBg = document.getElementById('defaultBg');
    const redBg = document.getElementById('redBg');
    const goldBg = document.getElementById('goldBg');

    // Reset all backgrounds
    defaultBg.classList.remove('show');
    redBg.classList.remove('show');
    goldBg.classList.remove('show');

    // Show appropriate background based on value
    if (value > 80) {
        goldBg.classList.add('show');
    } else if (value < 30) {
        redBg.classList.add('show');
    } else {
        defaultBg.classList.add('show');
    }
}

function updateBackground(percentage) {
    const defaultBg = document.getElementById('defaultBg');
    const redBg = document.getElementById('redBg');
    const goldBg = document.getElementById('goldBg');

    // Remove show class from all backgrounds
    [defaultBg, redBg, goldBg].forEach(bg => bg.classList.remove('show'));

    // Show appropriate background based on percentage
    if (percentage > 80) {
        goldBg.classList.add('show');
    } else if (percentage < 30) {
        redBg.classList.add('show');
    } else {
        defaultBg.classList.add('show');
    }
}

function updateProgress(value) {
    const percentage = (value / maxValue) * 100;
    progressBar.style.width = percentage + '%';
    progressText.textContent = value;
    updateBackground(percentage);
}

// ... existing code ... 