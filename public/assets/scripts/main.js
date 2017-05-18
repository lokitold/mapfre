(function($){

	var App = function(){

		base = this;

		base.dom = {
			mobileBtn: $('.js_Mobile_btn'),
			mobileMenu:  $('.js_Mobile_menu')
		};

		base.run = function(){
			base.dom.mobileBtn.on('click', base.function.toggleMenu)
		};

		base.function = {
			toggleMenu : function(e) {
				$(this).toggleClass('is-active');
				base.dom.mobileMenu.toggleClass('is-active');
			}
		};


	};


	var app = new App();

	app.run();


})(jQuery);
