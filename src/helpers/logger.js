
class Logger {

	constructor(info) {
		this._meta = info;
	}

	info(...arg) {
		return console.log({...this._meta, log: arg});
	}

	debug(...arg) {
		return console.log({...this._meta, log: arg});
	}

	warn(...arg) {
		return console.log({...this._meta, log: arg});
	}

	error(...arg) {
		return console.log({...this._meta, log: arg});
	}

	silly(...arg) {
		return console.log({...this._meta, log: arg});
	}

	trace(...arg) {
		return console.log({...this._meta, log: arg});
	}

	child(...arg) {
		return new Logger({...this._meta, log: arg});
	}

}

module.exports = Logger;
