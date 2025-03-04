import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import * as $ from 'svelte/internal/client';

var root_1 = $.template(`<div><div><div class="h-[788px] w-full relative pointer-events-none"><video class="object-cover h-[788px] w-full z-10 inline-block" autoplay loop playsinline="" preload="auto" tabindex="0"></video></div></div></div>`, 2);
var root_2 = $.template(`<div class="absolute bottom-0 left-0"><a class="text-white no-underline"><div> </div> <h2><div class="overflow-hidden"><span class="inline-block whitespace-normal"> </span></div> <div class="overflow-hidden"><span class="inline-block whitespace-normal"> </span></div> <div class="overflow-hidden"><span class="inline-block whitespace-normal"> </span></div></h2></a></div>`);
var root_3 = $.template(`<li class="mr-6"><button type="button"></button></li>`);
var root = $.template(`<header class="h-[788px] w-full box-border text-white font-['Benton_Sans_Book'] antialiased" aria-live="polite"><p class="mx-15 sticky top-32 text-2xl leading-[29px] z-10"></p> <div class="h-[788px] fixed top-0 left-0 w-full overflow-hidden box-border"><div class="h-[419px] absolute top-0 left-0 w-full bg-gradient-to-t from-transparent to-[rgba(10,10,10,0.45)] pointer-events-none z-10"></div> <div class="h-[788px] absolute top-0 left-0 w-full"></div> <div class="absolute bottom-24 left-15 w-[713.75px] z-20"></div> <ul class="absolute bottom-15 left-15 flex items-center list-none m-0 p-0 z-20"></ul> <button type="button" class="absolute bottom-12 right-15 w-10 h-10 rounded-full border border-white opacity-100 transition-opacity duration-300 z-30 cursor-pointer bg-transparent" aria-live="polite" data-playing=""><span aria-label="Pause video" class="block h-9 w-full relative"><svg width="13" height="14" viewBox="0 0 13 14" class="absolute left-3 top-4"><path d="M12.384 0H8.29489V14H12.384V0Z" fill="white" class="transition-colors duration-300"></path><path d="M4.0891 0H0V14H4.0891V0Z" fill="white" class="transition-colors duration-300"></path></svg></span> <span aria-label="Play video" class="hidden h-full w-full relative"><svg width="9" height="11" viewBox="0 0 9 11" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><path d="M0 11V0L9 5.21053L0 11Z" fill="white" class="transition-colors duration-300"></path></svg></span></button> <div class="h-[547px] absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[rgba(10,10,10,0.45)] pointer-events-none z-10"></div> <div class="h-[788px] absolute top-0 left-0 w-full bg-black opacity-0 pointer-events-none z-30"></div></div></header>`);

export default function FirstSectionHome($$anchor, $$props) {
	$.push($$props, false);

	const data = {
		"slides": {
			"coloca-aqui-tu-url-amigable": {
				h1: "Coloca aquí el nombre corto",
				h2: "Coloca aquí el título principal",
				h3: "Coloca aquí el subtítulo",
				h4: "Coloca aquí la descripción",
				media: ["URL-de-tu-video-aqui"]
			},
			"segundo-proyecto-url": {
				h1: "Nombre corto del proyecto",
				h2: "Título principal del proyecto",
				h3: "Subtítulo del proyecto",
				h4: "Descripción del proyecto",
				media: ["URL-de-tu-segundo-video"]
			},
			"tercer-proyecto-url": {
				h1: "Nombre institución/proyecto",
				h2: "Título destacado",
				h3: "Información complementaria",
				h4: "Descripción adicional",
				media: ["URL-de-tu-tercer-video"]
			}
		}
	};

	// Convertir el objeto slides a un array para mantener compatibilidad con el #each
	const slides = Object.entries(data.slides).map(([slug, slideData]) => ({ slug, ...slideData }));

	console.log('Estructura completa de slides:', JSON.stringify(data, null, 2));
	$.init();

	var header = root();
	var div = $.sibling($.child(header), 2);
	var div_1 = $.sibling($.child(div), 2);

	$.each(div_1, 5, () => slides, $.index, ($$anchor, slide, index) => {
		var div_2 = root_1();

		$.set_class(div_2, `h-[788px] w-full fixed top-0 right-0 overflow-hidden cursor-grab ${(index !== 2 ? 'translate-x-full' : '') ?? ''}`);

		var div_3 = $.child(div_2);

		$.set_class(div_3, `h-[788px] w-full ${(index !== 2 ? 'scale-120' : '') ?? ''} backface-hidden`);

		var div_4 = $.child(div_3);
		var video = $.child(div_4);

		video.muted = true;
		$.reset(div_4);
		$.reset(div_3);
		$.reset(div_2);

		$.template_effect(() => {
			$.set_attribute(video, 'src', $.get(slide).media[0]);
			$.set_attribute(video, 'title', $.get(slide).h1);
		});

		$.append($$anchor, div_2);
	});

	$.reset(div_1);

	var div_5 = $.sibling(div_1, 2);

	$.each(div_5, 5, () => slides, $.index, ($$anchor, slide, index) => {
		var div_6 = root_2();

		$.template_effect(() => {
			console.log({
				slide: $.untrack(() => $.snapshot($.get(slide)))
			});

			debugger;
		});

		div_6.inert = index !== 2;

		var a = $.child(div_6);
		var div_7 = $.child(a);

		$.set_class(div_7, `${(index === 2 ? 'opacity-100' : 'opacity-0') ?? ''} font-['Benton_Sans_Bold'] text-sm font-bold leading-[17px] mb-4`);

		var text = $.child(div_7, true);

		$.reset(div_7);

		var h2 = $.sibling(div_7, 2);

		$.set_class(h2, `${(index === 2 ? 'opacity-100' : 'opacity-0') ?? ''} text-5xl leading-[58px] font-['Benton_Sans_Light'] font-normal m-0`);

		var div_8 = $.child(h2);
		var span = $.child(div_8);
		var text_1 = $.child(span, true);

		$.reset(span);
		$.reset(div_8);

		var div_9 = $.sibling(div_8, 2);
		var span_1 = $.child(div_9);
		var text_2 = $.child(span_1, true);

		$.reset(span_1);
		$.reset(div_9);

		var div_10 = $.sibling(div_9, 2);
		var span_2 = $.child(div_10);
		var text_3 = $.child(span_2, true);

		$.reset(span_2);
		$.reset(div_10);
		$.reset(h2);
		$.reset(a);
		$.reset(div_6);

		$.template_effect(() => {
			$.set_attribute(a, 'href', `/projects/${$.get(slide).slug}`);
			$.set_attribute(a, 'aria-label', `${$.get(slide).h1} - ${$.get(slide).h2}`);
			$.set_text(text, $.get(slide).h1);
			$.set_text(text_1, $.get(slide).h2);
			$.set_text(text_2, $.get(slide).h3);
			$.set_text(text_3, $.get(slide).h4);
		});

		$.append($$anchor, div_6);
	});

	$.reset(div_5);

	var ul = $.sibling(div_5, 2);

	$.each(ul, 5, () => slides, $.index, ($$anchor, slide, index) => {
		var li = root_3();
		var button = $.child(li);

		$.set_class(button, `w-2 h-2 bg-white rounded-full ${(index === 2 ? 'opacity-100' : 'opacity-40') ?? ''} border border-white transition-opacity duration-300 cursor-pointer`);
		$.reset(li);

		$.template_effect(() => {
			$.set_attribute(button, 'data-target', $.get(slide).slug);
			$.set_attribute(button, 'aria-label', `Go to ${$.get(slide).h1}`);
		});

		$.append($$anchor, li);
	});

	$.reset(ul);
	$.next(6);
	$.reset(div);
	$.reset(header);
	$.append($$anchor, header);
	$.pop();
}