document.addEventListener("DOMContentLoaded", () => {
    // Show the first gallery and start fading it out after a delay
    setTimeout(() => {
        document.getElementById('first-gallery').style.display = 'none'; // Hide first gallery
        document.getElementById('text-container').style.display = 'block'; // Show text container
    }, 5000); // Adjust timing to make sure the first gallery is visible long enough

    // Calculate the total time for all verses to be displayed
    const totalVerseTime = 33 * 1000; // Total time for all verses to appear

    // Show the second gallery after the last verse
    setTimeout(() => {
        document.getElementById('second-gallery').style.display = 'flex'; // Show second gallery
    }, totalVerseTime + 1000); // Add a little extra delay for a smooth transition
});
