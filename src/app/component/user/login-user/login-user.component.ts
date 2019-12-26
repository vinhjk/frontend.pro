import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;
  isShow = false;
  isSuccess = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
        username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
      }
    );
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.userLogin(this.loginForm.value).subscribe( result => {
        console.log(result);
        localStorage.setItem('ACCESS_TOKEN', result.token);
        this.isShow = true;
        this.isSuccess = true;
        localStorage.setItem('userOnline', this.loginForm.get('username').value);
        this.router.navigate(['home']);
      }, error => {
        this.isShow = true;
        this.isSuccess = false;
      });
    }
  }

}
