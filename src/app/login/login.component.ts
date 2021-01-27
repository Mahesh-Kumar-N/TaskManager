import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.authService.login(username, password).subscribe(data => {
      if (data) {
        this.router.navigate(['/dashboard']);
      }
    });
  }


}
