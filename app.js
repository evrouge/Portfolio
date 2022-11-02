//Creating a web page portfolio with jQuery/JS


$(() => {
    //omg how does this ACTUALLY work
    //accordian expand / collapse for resume and portfolio
    $('.expand').click(function () {
        $(this).find('.collapse').slideToggle(1000);
    })

})
