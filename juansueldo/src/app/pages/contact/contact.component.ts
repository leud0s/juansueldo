import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { EmailsService } from 'src/app/services/emails.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from 'src/app/validators/form-validators';
import { Email } from 'src/app/class/email';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ContactComponent {
  form: FormGroup | undefined;
  constructor(private emailsService: EmailsService, private fb: FormBuilder){
    this.form = this.fb.group({
      name: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      lastName: new FormControl(null, {
        validators: [FormValidator.onlyLetters],
        updateOn: 'change',
      }),
      email: new FormControl(null, {
        validators: [Validators.email],
        updateOn: 'change',
      }),
      message: new FormControl(null, {
        validators: [Validators.maxLength(200), Validators.minLength(3)],
        updateOn: 'change',
      }),
    });
  }
  onSubmit(){
    if(!this.form.value.valid){
      console.log("complete todos los campos");
      this.form.reset();
      return;
    }
    const email = new Email(this.form.value.name, this.form.value.lastName, this.form.value.email, this.form.value.message);
    try{
      this.emailsService.saveEmail(email);
    }
    catch(error){
      console.log(error);
    }
    finally{
      this.form.reset();
    }
  }
}
