export default class AccountManager {

	// Use rest parameter
	_hasAccounts(...accountNumbers) {
		for(let i in accountNumbers) {
			let accountNumber = accountNumbers[i];

			console.info('accountNumber', accountNumber);
		}
	}

	// Use spread operator
	searchAccountNumbers() { 
		let accountNumbers = ['1234567', '5434233', '8855441'];

		this._hasAccounts(...accountNumbers);
	}

	// Object initializer
	createDigest(accountNumber, accountTitle) {

		// Template strings:
		const digest = `The unique identifier for the record is its account number, ${accountNumber} , 
The title assigned to this account is ${accountTitle}.`;

		const accountInfo = { accountNumber, accountTitle, digest };

		console.info('accountInfo', accountInfo);

		// destruct the selected item(s):
		const digestOnly = { digest };
		console.info('digest', digest);
	}

	// Object.assign:
  // countDownTimer("thisElement", 60, { container: '.new-post-options' });

	countDownTimer(target, timeLeft, options = {}) {
		let defaults = {
			container: ".timer-display",
			timeLeft: "second",
			maxLength: "24 hrs"
		}

		let settings = Object.assign({}, defaults, options);

		console.log( settings.container );
		console.log( settings.timeUni );
	}
}

