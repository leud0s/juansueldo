export class Email{
    id?: string;
    name: string;
    lastName: string;
    emailSender: string;
    message: string;

    constructor(name: string, lastName: string, emailSender: string, message: string, id: string=''){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.emailSender = emailSender;
        this.message = message;

    }
}