import { Component } from '@angular/core';
import { UserLoginRequest, UserRegisterRequest } from '../../service/auth/auth.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { PopupService } from '../../service/popup/popup.service';
import { PopupType } from '../../service/popup/popup.model';
import { error } from 'console';
import { TokenManagerService } from '../../service/token-manager/token-manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthService,
    PopupService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userRegisterRequest: UserRegisterRequest = {
    nickname: '',
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private notify: PopupService
  ) {}

  onSubmit() {
    this.authService.register(this.userRegisterRequest).subscribe(response => {
      this.notify.showPopup('Success!', 'Successfully registered!', PopupType.Success);
    }, error => this.notify.showPopup('Error!', 'Failed to registered!', PopupType.Error)); 
  }
}
