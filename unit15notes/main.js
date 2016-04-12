
$(document).ready(function(){
    
    // select the button
    $("#btn-clickme").click(function(){
       
       // change the heading
        $("h1").text("Eric's Awesome Page")
               .css("background-color", "purple");
    });
    
    $("#btn-clickme2").click(function(){
       
       // hide an element
       //$("p").hide();
        
        $("p").toggle();
        
    });
    
    $("#hover-test").hover(
       function(){ // mouse-enter
       $("h2").css("background-color", "yellow"); 
    }, function(){ // mouse-leave
       $("h2").css("background-color", "");
    });
    
    $("#some-link").click(function(){
        alert("Oh no, you formatted your hard drive!"); 
    });
    
});
