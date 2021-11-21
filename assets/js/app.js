$(function() {
    
    

    
    
    var header =$("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset =$(window).scrollTop();
    
    checkScroll(scrollOffset);
    $(window).on("scroll", function(){
        
        scrollOffset=$(this).scrollTop();
        checkScroll(scrollOffset);
    });
    
    
    
    
    
    
    
    function checkScroll(scrollOffset){
        
        if (scrollOffset>=introH){
            
            header.addClass("fixed");
            
            
        }else{
            header.removeClass("fixed");
        }
        
        
    }
    
    $("[data-scroll]").on("click", function(event){
        
       event.preventDefault();
        var $this=$(this),
            blockid=$this.data('scroll'),
            blockoffset=$(blockid).offset().top;
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        
       $("html, body").animate({
           
           
           scrollTop:blockoffset
           
       }, 500); 
    });
    
    
  
  });
