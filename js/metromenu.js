$(document).ready(function(){
    $("#btn-menu").click(function(){
        $('.full-menu-con').toggle("fast");
    });

    $(".menu-panel").on({
        click: function(){ alert(1); },
        mouseover: function(){ $(this).css({"background-color": "#0078d7"}); },
        mouseout: function(){ $(this).css({"background-color": "#454545"}); }
    } , ".menu-boxes");
});
