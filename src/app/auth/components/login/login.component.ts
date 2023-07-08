import { Component } from '@angular/core';
import { RegisterEntity } from '../../entity/RegisterEntity.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerEntity: RegisterEntity = new RegisterEntity();
  message: string;

  constructor(private authService: AuthService) { }

  onSubmit(): void {

    this.authService.login(this.registerEntity).subscribe(
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
