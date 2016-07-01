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
		const digest = 'The unique identifier for the record is its account number, ' 
			+ accountNumber + ".  The title assigned to this account is  " + accountTitle;

		return { accountNumber, accountTitle, digest };
	}
}