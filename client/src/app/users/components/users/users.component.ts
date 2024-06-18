import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
