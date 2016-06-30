import $ from 'jquery';
import ajaxmini from './ajax/ajaxmini';

$(function () {

	const siteContainer = $('.siteContainer');

	$('.js-fixed-header').click(function() {
		siteContainer.toggleClass('l-header-fixed');
	});

	$('.js-fixed-footer').click(function() {
		siteContainer.toggleClass('l-footer-fixed');
	});

	const ajax = new ajaxmini();
	ajax.jsonPost();

});