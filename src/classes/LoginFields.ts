export class LoginFields {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export class RegistrationFields {
    username: string;
    password: string;
    email: string;
    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}