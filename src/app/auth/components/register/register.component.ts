import { Component } from '@angular/core';
import { RegisterEntity } from '../../entity/RegisterEntity.interface';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerEntity: RegisterEntity = new RegisterEntity();
  message: string;
  registrationForm: FormGroup;
  hide = true;


  public myForm: FormGroup = this.fb.group({
    firstname: [''],
    lastname: [''],
    genre: [''],
    email: [''],
    password: [''],
    dniType: [''],
    dni: [''],
  });

  
  constructor(private authService: AuthService, private fb: FormBuilder) { }


  onSubmit(): void {

    this.authService.register(this.registerEntity).subscribe(
      data => {
        console.log(data);
        this.message = 'Inicion de sesion exitoso!';
      },
      error => {
        console.log(error);
        this.message = 'Error al iniciar sesion!';
      }
    );


  }

}
