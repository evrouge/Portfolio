//Creating a web page portfolio with jQuery/JS


$(() => {
    // Opening the modal
    $('#open-button').on('click', function () {
        $('#inside').css('display', 'inline-block');
    })

    // Closing the modal
    $('#close-button').on('click', function () {
        $('#inside').css('display', 'none');
    })

    // Accordion expand / collapse for resume
    $('.expand').click(function () {
        $('.collapse').slideToggle(700);
    })

    // Accordion expand / collapse for portfolio
    $('.expand2').click(function () {
        $('.collapse2').slideToggle(700);
    })

    // Mouseover / Mouseout hover button for linkedin works!!
    $('#hover-linkedin').mouseover(function () {
        $('#hover-linkedin').css('background', 'green');
    })
    $('#hover-linkedin').mouseout(function () {
        $('#hover-linkedin').css('background-color', 'pink');
    })

    // Mouseover / Mouseout hover button for github
    $('#hover-github').mouseover(function () {
        $('#hover-github').css('background-color', 'blue');
    })
    $('#hover-github').mouseout(function () {
        $('#hover-github').css('background-color', 'pink');
    })


})
