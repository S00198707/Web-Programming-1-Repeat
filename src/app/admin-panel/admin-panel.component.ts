import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminComponent implements OnInit {
  email: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  
  ngOnInit() {
    this.getRegisteredUsersFromLocalStorage();
  }

  save() {
    this.userService.createUser(this.email, this.password, this.firstname, this.lastname).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Admin has created the user successfully');

        if (resultData.status) {
          this.getRegisteredUsers(); 
        } else {
          alert('Error creating the user');
          console.log('Error logging');
        }
      },
      (error) => {
        console.error(error);
        alert('Error creating the user');
      }
    );
  }

  getRegisteredUsers() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data.users;
        this.saveUsersToLocalStorage(); 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteUser(user: any) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const userId = user.id;
      const userIndex = this.users.findIndex(u => u.id === userId);
      if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
        alert('User deleted successfully.');
        this.saveUsersToLocalStorage(); 
      }
    }
  }

  saveUsersToLocalStorage() {
    localStorage.setItem('registeredUsers', JSON.stringify(this.users));
  }

  getRegisteredUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('registeredUsers');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.getRegisteredUsers();
    }
  }
}

  
  
  
  
  
  
  
