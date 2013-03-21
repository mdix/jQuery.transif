There's a nice jQuery extension, called jQuery.transit, which brings CSS3 transitions to jQuery. This is cool, as long as you don't have to support browser that give a shit about transitions (like IE8, for example). 

This extension wraps jQuery.transit and decides weather to use transitions or jQuery's animate(). Note: This extension has been developed as far as the project I needed it for demanded it. It doesn't pass all parameters to transit, for example.

Usage:
Include jQuery and jQuery.transit (https://github.com/rstacruz/jquery.transit), then use:

jQuery(selector).transif({
    left: "500px"
})

Sorry for the markup, had no time to format it.
