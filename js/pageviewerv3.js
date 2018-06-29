/* Méthode en utilisant le plugin cookies */

jQuery( document ).ready(function( $ ) {
	function getSubdomain() {
		var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
		var urlParts = regexParse.exec(window.location.hostname);
		return window.location.hostname.replace(urlParts[0],'').slice(0, -1);
	}
	var subdo = getSubdomain();
	var visited = 0;
	if ($.cookie('visited')) {
		visited = $.cookie('visited');
	}
	if (visited == 0) {
		noty({
			layout: 'center',
			theme: 'relax',
			type: 'warning',
			text: '<header><img src="/theme/vinovision_desktop_2018/img/surcharge/logo.png" alt="Vinovision | Refreshingly different"> <div class="lang-fr"><span>BIENVENUE</span> SUR LE SITE VINOVISION</div><div class="lang-en"><span>WELCOME</span> ON VINOVISION WEBSITE</div></header><div class="content"><div class="content-language"><span class="language-switcher french active" data-lang="fr"><img src="/theme/vinovision_desktop_2018/img/surcharge/modalbox/french.png" alt="">Français</span><span class="language-switcher english" data-lang="en"><img src="/theme/vinovision_desktop_2018/img/surcharge/modalbox/english.png" alt="">English</span></div><p class="lang-fr"><span class="title">Avez-vous l\'âge légal ?</span><br>Pour visiter notre site, vous devez avoir l\'âge légal<br> pour consommer de l\'alcool dans votre pays de<br> résidence selon la législation en vigueur.</p><p class="lang-en"><span class="title">Do you have the legal age?</span><br>To visit our website, you must be of legal age<br> to consume alcohol in your country of residence<br> according to the legislation in force.</p></div>',
			dismissQueue: true, 
			animation: {
				open: {height: 'toggle'},
				close: {opacity: 0},
				easing: 'swing',
				speed: 500 
			},
			modal: true,
			timeout: 0,
			buttons: 
			[
				{
					text: '<span class="lang-fr">J\'AI PLUS DE 18 ANS</span><span class="lang-en">I AM 18+</span>', onClick: function($noty) {
					// this = button element
					// $noty = $noty element
					$noty.close();
					//noty({text: 'Merci pour votre compréhension', type: 'success'});
					}
				}
				/*{
					text: 'EN SAVOIR PLUS', onClick: function($noty) {
						// this = button element
						// $noty = $noty element
						window.open('http://www.airfrance.fr/FR/fr/common/page_flottante/hp/infos_trafic_aerien_air_france.htm', '_blank');
						$noty.close();
						noty({text: 'Merci pour votre compréhension', type: 'success'});
					}
				} */
			]
		});     
	}
	
	$('.content-language .language-switcher').on('click', function() {
		var lang = 'lang-' + $(this).attr('data-lang');
		
		$('.content-language .language-switcher').removeClass('active');
		$(this).addClass('active');
		$('.lang-fr, .lang-en').hide();
		$('.' + lang).show();
	});

	visited++;
	var date = new Date();
	date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
	$.cookie('visited', visited, {expires: 1, path: '/'});
});