jQuery(document).ready(
    function()
    {
        jQuery("div.concept-banner").each(
            function() 
            {
                var wrap = jQuery(this);
                var begin = wrap.attr('data-wow-delay');

                begin = parseInt(begin) * 1000;

                setTimeout(
                    function() 
                    {
                        wrap.removeClass('cb-hide');

                        wrap.addClass(wrap.attr('data-animate'));

                        var height = wrap.height();

                        if(wrap.hasClass("cb-top") && (jQuery(window).width() > 992))
                        {
                            jQuery("body").css({paddingTop: height +"px"});
                        } 
                        if(wrap.hasClass("cb-top") && (jQuery(window).width() < 992))
                        {
                            jQuery("body").css({paddingBottom: height +"px"});
                        } 

                        if(wrap.hasClass("cb-bottom"))
                        {
                            jQuery("body").css({paddingBottom: height +"px"});
                        }  

                        if(wrap.hasClass("cb-top") && (jQuery(window).width() < 992) && wrap.hasClass("slideInDown"))
                        {
                            wrap.removeClass("slideInDown");
                            wrap.addClass("slideInUp");
                        }  
                        if(wrap.hasClass("cb-right") && (jQuery(window).width() < 992) && wrap.hasClass("slideInRight"))
                        {
                            wrap.removeClass("slideInRight");
                            wrap.addClass("slideInLeft");
                        }   
     
                      
                        

                    },

                    begin

                );


                if(wrap.hasClass("animated"))
                {

                    var c_img = 0;
                    var c_text = 0;
                    var c_buttons = 0;
                    var c_close = begin + 5000;

                    if(wrap.hasClass("cb-top") || wrap.hasClass("cb-bottom")){
                        c_img = begin + 500;
                        c_text = begin + 1000;
                        c_timer = begin + 500;
                        c_buttons = begin + 1500;
                    }

                    if(wrap.hasClass("cb-left") || wrap.hasClass("cb-right")){
                        c_img = begin + 500;
                        c_text = begin + 1000;
                        c_timer = begin + 500;
                        c_buttons = begin + 1500;
                    }


                    if(jQuery(window).width() < 992)
                    {
                        wrap.find('td.cb-img div.cb-img img').removeClass("slideInUp");
                        wrap.find('td.cb-img div.cb-img img').addClass("fadeIn");
                    }


                    setTimeout(
                        function() 
                        {
                            if(wrap.hasClass("cb-long"))
                            {
                                wrap.find('div.cb-img img').removeClass('cb-hide');
                                wrap.find('div.cb-img img').addClass(wrap.find('div.cb-img img').attr('data-animate'));
                            }

                            if(wrap.hasClass("cb-side"))
                            {
                                wrap.find('div.cb-img').removeClass('cb-hide');
                                wrap.find('div.cb-img').addClass(wrap.find('div.cb-img').attr('data-animate'));
                            }
                        },

                        c_img

                    );

                    setTimeout(
                        function() 
                        {
                            if(wrap.hasClass("cb-long"))
                            {
                                wrap.find('td.cb-text').removeClass('cb-hide');
                                wrap.find('td.cb-text').addClass(wrap.find('td.cb-text').attr('data-animate'));
                            }
                            if(wrap.hasClass("cb-side"))
                            {
                                wrap.find('div.cb-text').removeClass('cb-hide');
                                wrap.find('div.cb-text').addClass(wrap.find('div.cb-text').attr('data-animate'));
                            }


                        },

                        c_text

                    );

                    setTimeout(
                        function() 
                        {
                            if(wrap.hasClass("cb-long"))
                            {
                                wrap.find('td.cb-buttons').removeClass('cb-hide');
                                wrap.find('td.cb-buttons').addClass(wrap.find('td.cb-buttons').attr('data-animate'));
                            }
                            if(wrap.hasClass("cb-side"))
                            {
                                wrap.find('div.cb-buttons').removeClass('cb-hide');
                                wrap.find('div.cb-buttons').addClass(wrap.find('div.cb-buttons').attr('data-animate'));
                            }

                        },

                        c_buttons

                    );


                    setTimeout(
                        function() 
                        {
                            wrap.find('div.cb-close').addClass('cb-ready');
                        },

                    c_close

                    );

                }

            }
        );

    }
);


function cookie(id, time)
{
    BX.setCookie('cbanner'+id, true, {path: "/", expires: 60*60* +time});

    /*jQuery.post(
        "/bitrix/components/concept/banners/cookie.php",
        {
            id: id,
            time: time
        }

    );*/

}

jQuery(document).on("click", "div.cb-close", 
    function()
    { 

        var time = jQuery(this).parents('.concept-banner').attr('data-cb-time');
        var id = jQuery(this).parents('.concept-banner').attr('data-cb-id');
        var wrap =  jQuery(this).closest('div.concept-banner');
        wrap.addClass('out');

        if(wrap.hasClass("cb-top"))
        {
            jQuery("body").css({paddingTop: 0 +"px"});
        }
        if(wrap.hasClass("cb-bottom"))
        {
            jQuery("body").css({paddingBottom: 0 +"px"});
        }

        if(time.length > 0)
        {
            cookie(id, time);
            
        }
        

    }
);


jQuery(document).on("click", "a.cb-link", 
    function()
    { 
        var time = jQuery(this).parents('.concept-banner').attr('data-cb-time');
        var id = jQuery(this).parents('.concept-banner').attr('data-cb-id');
        var wrap =  jQuery(this).closest('div.concept-banner');

        var btn = jQuery(this);
        wrap.addClass('out');

        if(wrap.hasClass("cb-top"))
        {
            jQuery("body").css({paddingTop: 0 +"px"});
        }
        if(wrap.hasClass("cb-bottom"))
        {
            jQuery("body").css({paddingBottom: 0 +"px"});
        }

        if(time.length > 0)
        {
            cookie(id, time);
            
        }
        
        jQuery.post('/bitrix/components/concept/banners/metrick.php', 
            { 
                element: btn.attr("data-element")
            },

            function(html) 
            {

                jQuery('body').append(html);
            }
        );

    }
);



jQuery(document).ready(
    function()
    { 
        if(jQuery(window).width() > 1199)
        {
            jQuery('a.btn-def').hover(
                function(){
                    jQuery(this).css({'animation-delay': '0s'});
                    jQuery(this).addClass('pulse');
                    jQuery(this).removeClass('zoomIn');
                },
                function(){
                    jQuery(this).removeClass('pulse');
                }
            );
        }

        

        setInterval(
            function()
            {
                if(jQuery(".cb-mini-side").find(".cb-img").hasClass('animated'))
                {
                    jQuery(".cb-img").addClass('bigpulse');
                }
                setTimeout(
                    function()
                    {
                        if(jQuery(".cb-mini-side").find(".cb-img").hasClass('animated'))
                        {
                            jQuery(".cb-img").removeClass('bigpulse');
                        }

                    }
                    , 1000);
            }, 7000);
    }
);
