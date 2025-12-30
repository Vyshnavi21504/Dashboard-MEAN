import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DashboardService } from '../../services/dashboard';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', email: '', role: 'User' }; 

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dashboardService.getUsers().subscribe(data => this.users = data);
  }

  submitUser() {
    if (this.newUser.name && this.newUser.email) {
      this.dashboardService.addUser(this.newUser).subscribe(() => {
        this.loadUsers(); // Refresh the table
        this.newUser = { name: '', email: '', role: 'User' };
      });
    }
  }
}