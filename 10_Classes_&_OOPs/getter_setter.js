class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}rishabh`
    }
    set password(value) {
        this._password = value
    }
}

const rishabh = new User("r@rishabh.ai", "abc")
console.log(rishabh.email);
console.log(rishabh.password);
