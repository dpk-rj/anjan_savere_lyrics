document.addEventListener('DOMContentLoaded', function() {
    const hook = document.getElementById('hook');

    // Add a class when the mouse hovers over the hook/chorus
    hook.addEventListener('mouseover', function() {
        hook.style.backgroundColor = '#fff0e5'; // Light orange background on hover
        hook.style.transition = '0.3s';
        hook.style.transform = 'scale(1.01)';
    });

    // Remove the class when the mouse leaves
    hook.addEventListener('mouseout', function() {
        hook.style.backgroundColor = '#fff';
        hook.style.transform = 'scale(1)';
    });
});