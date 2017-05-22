(function($){

	var App = function(){

		base = this;

		base.dom = {
			mobileBtn: $('.js_Mobile_btn'),
			mobileMenu:  $('.js_Mobile_menu'),
			form: null,
			addObras: $('#addObras'),
			obradd: $('#obradd'),
			commentForm: $('#commentForm'),
			js_file: $('.js_file'),
			js_fecha: $('.js_fecha'),
			js_fecha_din: $('.js_fecha_din')
		};

		base.run = function(){
			base.dom.mobileBtn.on('click', base.function.toggleMenu);
			base.dom.addObras.on('change', base.function.addForm);
			base.dom.commentForm.parsley();
			base.dom.commentForm.on('focus blur','.js_fecha', base.function.birthday)
			base.dom.js_fecha.focusin(base.function.in).focusout(base.function.out);
		};

		base.function = {
			toggleMenu : function(e) {
				$(this).toggleClass('is-active');
				base.dom.mobileMenu.toggleClass('is-active');
			},
			buildHTML: function(i) {
				base.dom.form = '<div class="Form__row cgrid-row cgrid-row--2-md">'+
								'<h2>OBRA ' + i + '</h2>' +
								'<div class="col-5-md">'+
									'<div class="atm_Form-input" >'+
										'<input type="text" placeholder="NOMBRES" required data-parsley-pattern="[a-zA-Z]+" data-parsley-error-message="Ingresa solamente texto">' +
									'</div>' +
								'</div>' +
								'<div class="col-5-md">' +
									'<div class="atm_Form-input">' +
										'<input type="text" placeholder="APELLIDOS" required data-parsley-pattern="[a-zA-Z]+" data-parsley-error-message="Ingresa solamente texto">' +
									'</div>' +
								'</div>' +
								'<div class="col-5-md">' +
									'<div class="atm_Form-input">' +
										'<select required data-parsley-error-message="SELECCIONA UN VALOR">'+
											'<option value="">TIPO DE DOCUMENTO DE IDENTIDAD</option>'+
											'<option value="">DNI</option>'+
											'<option value="">PASAPORTE</option>'+
										'</select>'+
									'</div>' +
								'</div>' +
								'<div class="col-5-md">' +
									'<div class="atm_Form-input">' +
										'<input type="text" placeholder="N° DE DOCUMETO" data-parsley-maxlength="8" required data-parsley-type="number" data-parsley-error-message="Ingresar 8 digitos númericos">' +
									'</div>' +
								'</div>'+
								'<div class="col-5-md">'+
									'<div class="atm_Form-input">'+
										'<input class="js_fecha" type="text" placeholder="FECHA DE NACIMIENTO" required data-parsley-error-message="Ingresar fecha de nacimiento">'+
									'</div>'+
								'</div>'+
								'<div class="col-5-md">'+
									'<div class="atm_Form-input">'+
										'<input type="text" placeholder="TELÉFONO" required data-parsley-type="number" data-parsley-error-message="Ingresar Telefono Valido">'+
									'</div>'+
								'</div>'+
								'<div class="col-5-md">'+
									'<div class="atm_Form-input">'+
										'<input class="js_file" type="file" placeholder="ADJUNTA TU OBRA" required data-parsley-error-message="Adjunta tu Obra">'+
									'</div>'+
								'</div>'+
								'</div>';

						return base.dom.form;
			},
			addForm: function(e) {

				var total = $(this).val();
				var i = 0;


						var col = [];

						for(var i = 1; i <= total; i++) {
							col.push(base.function.buildHTML(i))
						}

						base.dom.obradd.empty();

						$(col.join('')).appendTo(base.dom.obradd);

						setTimeout(function(){
							$('.js_file').jfilestyle({input: false});
							$('.js_fecha_din').mask("00/00/0000", {placeholder: "__/__/____"});
						},0)




			},
			birthday: function(e) {
				if(e.type === 'focusin') {
					$(this).mask("00/00/0000", {placeholder: "__/__/____"});
				}
				if(e.type === 'focusout') {
					$(this).unmask();
				}
			},
			out: function(e) {

			}
		};


	};


	var app = new App();

	app.run();


})(jQuery);
