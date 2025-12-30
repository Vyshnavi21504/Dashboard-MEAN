import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  user = { name: '', email: '', password: '', role: 'Admin' };
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleRegister() {
    this.http.post('https://mean-admin-backend.onrender.com/api/auth/register', this.user).subscribe({
      next: () => {
        this.message = 'Registration successful! Redirecting...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => this.message = 'Registration failed: ' + err.error.message
    });
  }
}