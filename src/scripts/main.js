import $ from 'jquery';
import ajaxmini from './ajax/ajaxmini';
import AccountManager from './account/account-manager';

$(function () {

	const siteContainer = $('.siteContainer');

	$('.js-fixed-header').click(function() {
		siteContainer.toggleClass('l-header-fixed');
	});

	$('.js-fixed-footer').click(function() {
		siteContainer.toggleClass('l-footer-fixed');
	});

	// Search component:
	const searchContainer = $('.js-searchContainer');

	$('.js-buttonSearchOpen').click(function() {
		searchContainer.addClass('open');
	});

	$('.js-buttonSearchClose').click(function() {
		searchContainer.removeClass('open');
	});

	$('.js-buttonSearchSubmit').click(function(evt) {
		// TODO: add actual
		evt.preventDefault();
	});

	const ajax = new ajaxmini();
	ajax.jsonPost();

	$('.js-actionMenu').click(function(evt) {
		const accountManager = new AccountManager();

		accountManager.searchAccountNumbers();
		
		// searchBooks('War and Peace', 'The Poisonwood Bible', 'A Girl from Krakow');
		// searchBookTitles();

		// // Object destructing
		// let { first, last, fullName } = builderUser("Alex", "Preston");
		// console.log( first );
		// console.log( last );
		// console.log( fullName );
	});

});




