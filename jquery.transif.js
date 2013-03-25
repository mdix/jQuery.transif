(function($) {
    $.fn.transif = function(animationConfigObject, animationSpeed, callback) {
        this._animationConfigObject = animationConfigObject;
        this._animationSpeed        = animationSpeed;
        this._callback = callback;
        this.animated  = false;
        
        this.applyAppropriateAnimationTechnique = function() {
            if (jQuery.data(document, 'supportsCssTransitions')) {
                console.log('Using transition');
                $(this).transition(
                    this._animationConfigObject,
                    this._animationSpeed,
                    this._callback
                );
            } else {
                console.log('Using animate');
                $(this).animate(
                    this._animationConfigObject,
                    this._animationSpeed,
                    this._callback
                );
            }
            this.setAnimatedState();
        };

        this.setAnimatedState = function() {
            var self = this;
            this.animated = true;

            window.setTimeout(function() {
                self.animated = false;
            }, this._animationSpeed);
        };

        this.isAnimated = function() {
            return this.animated;
        };

        this.applyAppropriateAnimationTechnique();
    };
    
    // detection code based on http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
    (this.checkForCssTransitionSupport = function() {
        var b = document.body || document.documentElement;
        var s = b.style;
        var p = 'transition';
        if (typeof s[p] == 'string') {
            jQuery.data(document, 'supportsCssTransitions', true);
            return;
        }

        // Tests for vendor specific prop
        v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
        p = p.charAt(0).toUpperCase() + p.substr(1);
        for (var i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p] == 'string') { 
                jQuery.data(document, 'supportsCssTransitions', true);
                return;
            }
        }
        jQuery.data(document, 'supportsCssTransitions', false);
    }());
}(jQuery));