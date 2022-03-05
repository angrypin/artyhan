localStorage.theme = localStorage.theme !== undefined ? localStorage.theme : 'light';
dark = localStorage.theme === 'dark';

const colors = {
	accent: {
		dark: '#588da7',
		light: '#faca0d'
	}, bghover: {
		dark: 'rgba(81, 142, 161, .6)',
		light: 'rgba(250, 202, 13, .6)'
	}, bgcolor: {
		dark: '#1b1c1d',
		light: '#fff'
	}
}, toggleTheme = (theme) => {
	localStorage.theme = theme;
	dark = localStorage.theme === 'dark';

	$('.theme-changer').html(`<i class="${dark ? 'moon' : 'sun'} icon"></i>${theme} theme`);
	dark
		? $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/dark.css">')
		: $('link[href*="dark.css"]').remove();
	/* $('.head').css('background-image', `url(assets/images/${theme}.jpg)`);
	
	$(':root')
		.css('--accent', colors.accent[theme])
		.css('--bghover', colors.bghover[theme])
		.css('--bgcolor', colors.bgcolor[theme]); */
};

$('.theme-changer').click(() => {
	toggleTheme(dark ? 'light' : 'dark');
});

toggleTheme(localStorage.theme);