import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { PopupService } from '../../service/popup/popup.service';
import { PopupType } from '../../service/popup/popup.model';
import { TokenManagerService } from '../../service/token-manager/token-manager.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  providers: [AuthService, PopupService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notify: PopupService,
    private tokenManagerService: TokenManagerService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.notify.showPopup(
          'Success!',
          'Successfully logged in!',
          PopupType.Success,
        );
        this.tokenManagerService.storeToken({
          token: response.token,
          refreshToken: response.refreshToken,
        });
        this.router.navigate(['/dashboard']);
      },
      (error) =>
        this.notify.showPopup('Error!', 'Failed to log in!', PopupType.Error),
    );
  }
}
