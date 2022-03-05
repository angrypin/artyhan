localStorage.theme = localStorage.theme !== undefined ? localStorage.theme : 'light';
dark = localStorage.theme === 'dark';

const toggleTheme = (theme) => {
	localStorage.theme = theme;
	dark = localStorage.theme === 'dark';

	$('.theme-changer').html(`<i class="${dark ? 'moon' : 'sun'} icon"></i>${theme} theme`);
	dark
		? $('head').append('<link rel="stylesheet" type="text/css" href="assets/css/dark.css">')
		: $('link[href*="dark.css"]').remove();
};

$('.theme-changer').click(() => {
	toggleTheme(dark ? 'light' : 'dark');
});

toggleTheme(localStorage.theme);