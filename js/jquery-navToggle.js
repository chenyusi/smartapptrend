(function($){

    $.fn.extend({
        
        navToggle : function(options){
           
            var defaults = { subMenuClass : "subMenu", addToggles : true, navToggleClass : "navToggle", collapsedClass : "collapsed", expandedClass : "expanded",activeLinkClass : "active", currentPath : window.location.pathname, expandCurrent : true };
            
            var options = $.extend(defaults,options);
            
            return this.each(function(){
         
            var o = options;
            
            var obj = $(this);
           
            var activeLINK = $('a[href="'+o.currentPath+'"]',obj);
            
            $('li ul',obj).addClass(o.subMenuClass);
            
            // add a span tag inside each list item inside a li that has a child ul
             $('li ul',obj).parent().each(function(){
                
                   $('<span class="'+o.navToggleClass+' '+o.collapsedClass+'"></span>').prependTo($(this));
        
             }); // end add span to each li with child ul
            
            if(o.addToggles){
                        
             // bind click handler to toggles
            
             $('span.'+o.navToggleClass).click(function(){
        
            if($(this).hasClass(o.collapsedClass)){
           
              $(this).removeClass(o.collapsedClass).addClass(o.expandedClass);
              var parentLI = $(this).parent();
              $('ul',parentLI).first().show();
          
            }else if($(this).hasClass(o.expandedClass)){
                       
              $(this).removeClass(o.expandedClass).addClass(o.collapsedClass);
              var parentLI = $(this).parent();
              $('ul',parentLI).hide();
              $('.'+o.navToggleClass, parentLI).removeClass(o.expandedClass).addClass(o.collapsedClass);
              
            }else{
          
            }
       
        
            });// end menu span click
            
            } // end if addToggles
    
        var activeSPAN = activeLINK.first().siblings('.'.navToggleClass);       
       
        if(o.expandCurrent){
         $(activeSPAN).siblings('.'+o.subMenuClass).first().show();
         $(activeSPAN).removeClass(o.collapsedClass).addClass(o.expandedClass);
         $(activeLINK).parents().siblings('.'+o.navToggleClass).removeClass(o.collapsedClass).addClass(o.expandedClass);
         $(activeLINK).parents('.'+o.subMenuClass).show();
        } // end if expandCurrent = true
            
            $(activeLINK).addClass(o.activeLinkClass);
         }); // return each 
            
        } // end navToggle 
               
     }); // fn.extend
        
})($);