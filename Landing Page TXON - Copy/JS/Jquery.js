$(document).ready(function(){
    $('#navItem1').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('#navItem2').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('#navItem3').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('#navItem4').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('#navItem5').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('#navItem6').hover(function(){
        $(this).css('background-color', 'yellow');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('.review-button').hover(function(){
        $(this).css('background-color', '#000801');
    }, function(){
        $(this).css('background-color', 'transparent');
    }),
    $('.banner-heading').fadeIn(3000);
    $('.banner-caption').fadeIn(3000);
    $('.custom-outline-button').fadeIn(3000);
    $('.image').fadeIn(8000);

    $('.custom-outline-button').click(function(){
        $('.form-container').fadeToggle('fast')
    }),
    $('#suspension-bridge').hover(function(){
        $('#suspension-text-1').fadeIn();
    }, function(){
        $('#suspension-text-1').fadeOut();
    }),
    $('#mountain-lake').hover(function(){
        $('#suspension-text-2').fadeIn();
    }, function(){
        $('#suspension-text-2').fadeOut();
    }),
    $('#tropical-leaves').hover(function(){
        $('#suspension-text-3').fadeIn();
    }, function(){
        $('#suspension-text-3').fadeOut();
    }),
    $('#tropical-jungle').hover(function(){
        $('#suspension-text-4').fadeIn();
    }, function(){
        $('#suspension-text-4').fadeOut();
    })
});