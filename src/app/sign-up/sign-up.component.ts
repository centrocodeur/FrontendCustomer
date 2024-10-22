import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../servicies/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  signupForm!: FormGroup;
  hidePassword = true;
  // skipLocationChange: true;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router) {
  }


  ngOnInit(): void{
    this.signupForm=this.fb.group({
      lastname: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],

    })
  }

  togglePasswordVisibility(){
    this.hidePassword= !this.hidePassword;
  }

  onSubmit(): void{
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;

    if(password !== confirmPassword){
      this.snackBar.open('Les mots de pass ne sont identiques.', 'Fermer', {duration: 5000, panelClass: 'error-snackbar'});
      return;
    }
    this.authService.register(this.signupForm.value).subscribe(
      (response)=>{
        this.snackBar.open('Votre Inscription a réussi !', 'Fermer', {duration: 5000});
        this.router.navigateByUrl("/validation");
      },
      (error)=>{
        this.snackBar.open('Votre Inscription a échoué!. Veuillez réessayer.', 'Fermer', {duration: 5000, panelClass: 'error-snackBar'})
      }
    )
  }


}
