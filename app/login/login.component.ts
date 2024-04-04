import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedUserType: string = 'jobSeeker'; // Default user type
  errorMessage: string = ''; // Error message for invalid user type

  constructor(private router: Router) {}

  login() {
    this.errorMessage = ''; // Reset error message on login attempt

    switch (this.selectedUserType) {
      case 'jobSeeker':
        this.router.navigate(['/jobseekerhomepage']); // Navigate to jobseeker home page
        break;
      case 'recruiter':
        this.router.navigate(['/recruiter']); // Navigate to recruiter home page
        break;
      case 'admin':
        this.errorMessage = 'Admin user type is not supported'; // Error message for admin type
        break;
      default:
        this.errorMessage = 'Invalid user type selected'; // Default error message
    }
  }
}
