import { Component } from '@angular/core';
import { UserLoginRequest } from '../../service/auth/auth.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { PopupService } from '../../service/popup/popup.service';
import { PopupType } from '../../service/popup/popup.model';
import { error } from 'console';
import { TokenManagerService } from '../../service/token-manager/token-manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthService,
    PopupService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userLoginRequest: UserLoginRequest = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private notify: PopupService,
    private tokenManagerService: TokenManagerService
  ) {}

  onSubmit() {
    this.authService.login(this.userLoginRequest).subscribe(response => {
      this.notify.showPopup('Success!', 'Successfully logged in!', PopupType.Success);
      this.tokenManagerService.storeToken( { token: response.token, refreshToken: response.refreshToken });
    }, error => this.notify.showPopup('Error!', 'Failed to logged in!', PopupType.Error)); 
  }
}
