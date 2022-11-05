//Creating a web page portfolio with jQuery/JS


$(() => {
    // gonna try making a modal happen here
    //open popup
    $('#open-button').on('click', function () {
        $('#inside').css('display', 'inline-block');
    })

    //close popup
    $('#close-button').on('click', function () {
        $('#inside').css('display', 'none');
    })


    // omg this ACTUALLY works, can't believe I did this lol
    // accordion expand / collapse for resume
    $('.expand').click(function () {
        $('.collapse').slideToggle(700);
    })

    // accordion expand / collapse for portfolio
    $('.expand2').click(function () {
        $('.collapse2').slideToggle(700);
    })

    // mouseover / mouseout function for linkedin works!!
    $('#hover-linkedin').mouseover(function () {
        $('#hover-linkedin').css('background', 'green');
    })
    $('#hover-linkedin').mouseout(function () {
        $('#hover-linkedin').css('background-color', 'pink');
    })

    //mouseover / mouseout for github
    $('#hover-github').mouseover(function () {
        $('#hover-github').css('background-color', 'blue');
    })
    $('#hover-github').mouseout(function () {
        $('#hover-github').css('background-color', 'pink');
    })


})
