$(document).ready(function(event) {
    
    $("form#quiz").submit(function(event) {
        var val1 = parseInt($("#one").val());
        var val2 = parseInt($("#two").val());
        var val3 = parseInt($("#three").val());
        var val4 = parseInt($("#four").val());
        var val5 = parseInt($("#five").val());
        var totalval = (val1+val2+val3+val4+val5)
        console.log(totalval)
        
    if((totalval <=20)){ 
        $("#java").show();
        $("#ruby").hide();
        $("#c").hide();
    } else if((totalval > 20 && totalval < 31  )){
        $("#ruby").show();
        $("#java").hide();
        $("#c").hide();
    }else if ((totalval>=31)){
        $("#c").show();
        $("#java").hide();
        $("#ruby").hide();
    }
        
    event.preventDefault();
    });   
});

