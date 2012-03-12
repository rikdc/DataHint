/*
 *	Data Hint 1.0 By Richard Claydon
 *
 *	Examples/Docs: https://github.com/rikdc/DataHint
 *	
 *  Copyright(c) 2011 Richard Claydon - icdw co uk
 *  License: http://www.opensource.org/licenses/mit-license.php
 */
(function(jQuery) {
	jQuery.fn.DataHint = function(o) {
		var e = this;
		var options = $.extend({
			hintAttribute: 'data-hint'
		}, o);
		return this.each(function() {
			$(this).bind({
				blur: function(a) {
					var t = $(this);
					if (t.val() == '') {
						t.val(t.attr(options.hintAttribute));
					}
				},
				focus: function(event) {
					var t = $(this);
					if (t.val() == t.attr(options.hintAttribute)) {
						t.val('');
					}
				}
			});
			$(this).trigger('blur');
		});
	}
})(jQuery);
