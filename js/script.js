$(document).ready(function () {
    var colorScheme = ['cold-palette', 'warm-palette'];
    var rand = colorScheme[Math.floor(Math.random() * colorScheme.length)];
    $('body').addClass(rand);
});
