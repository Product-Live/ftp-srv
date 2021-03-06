
class Logger {

	constructor(info) {
		this._meta = info;
	}

	log(...arg) {
		return process.stdout.write(JSON.stringify({...this._meta, log: arg}) + '\n');
	}

	info(...arg) {
		return this.log(...arg);
	}

	debug(...arg) {
		return this.log(...arg);
	}

	warn(...arg) {
		return this.log(...arg);
	}

	error(...arg) {
		return this.log(...arg);
	}

	silly(...arg) {
		return this.log(...arg);
	}

	trace(...arg) {
		return this.log(...arg);
	}

	child(...arg) {
		return new Logger({...this._meta, log: arg});
	}

}

module.exports = Logger;
