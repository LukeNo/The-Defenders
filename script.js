$(function() {
    $('#des1').show();
    $('#menu li').css('background', '#cc1414');
    $('#tab1').css('background', '#a10808');

    $('#tab1').click(function() {
        $('.content div').hide();
        $('#des1').show();
        $('#menu li').css('background', '#cc1414');
        $(this).css('background', '#a10808');
    })
    $('#tab2').click(function() {
        $('.content div').hide();
        $('#des2').show();
        $('#menu li').css('background', '#cc1414');
        $(this).css('background', '#a10808');
    })
    $('#tab3').click(function() {
            $('.content div').hide();
            $('#des3').show();
            $('#menu li').css('background', '#cc1414');
            $(this).css('background', '#a10808');
    })
    $('#tab4').click(function(){
        $('.content div').hide();
        $('#des4').show();
        $('#menu li').css('background', '#cc1414');
        $(this).css('background', '#a10808');
    })
    $('#tab5').click(function(){
        $('.content div').hide();
        $('#des5').show();
        $('#menu li').css('background', '#cc1414');
        $(this).css('background', '#a10808');
    })
})
