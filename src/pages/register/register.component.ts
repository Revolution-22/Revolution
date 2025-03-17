import { Component } from '@angular/core';
import {
  UserLoginRequest,
  UserRegisterRequest,
} from '../../service/auth/auth.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { PopupService } from '../../service/popup/popup.service';
import { PopupType } from '../../service/popup/popup.constants';
import { error } from 'console';
import { TokenManagerService } from '../../service/token-manager/token-manager.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  providers: [AuthService, PopupService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notify: PopupService,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        this.notify.showPopup(
          'Success!',
          'Successfully registered!',
          PopupType.Success,
        );

        this.router.navigate(['/login']);
      },
      (error) =>
        this.notify.showPopup('Error!', 'Failed to register!', PopupType.Error),
    );
  }
}
