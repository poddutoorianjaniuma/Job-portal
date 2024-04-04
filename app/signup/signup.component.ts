import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent {

  toggleAdditionalFields(): void {
    const userTypeSelect = document.getElementById('userType') as HTMLSelectElement;
    const jobSeekerFields = document.querySelector('.job-seeker-fields') as HTMLElement;
    const recruiterFields = document.querySelector('.recruiter-fields') as HTMLElement;

    if (userTypeSelect.value === 'jobSeeker') {
      jobSeekerFields.style.display = 'block';
      recruiterFields.style.display = 'none';
    } else if (userTypeSelect.value === 'recruiter') {
      jobSeekerFields.style.display = 'none';
      recruiterFields.style.display = 'block';
    } else {
      jobSeekerFields.style.display = 'none';
      recruiterFields.style.display = 'none';
    }
  }

}
