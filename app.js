//Creating a web page portfolio with jQuery/JS


$(() => {
    //omg how does this ACTUALLY work
    //accordian expand / collapse for resume
    $('.expand').click(function () {
        $('.collapse').slideToggle(1000);
    })

    //expand and collapse for portfolio
    $('.expand2').click(function () {
        $('.collapse2').slideToggle(1000);
    })

})
