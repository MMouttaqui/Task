import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})
export class UserDisplayComponent implements OnInit {
  users!: User[];
  page:number =1;
  pageSize = 5;
  pageSizes = [3, 6, 9];
  userFilter!: User;

  constructor(private usersService: UsersService) { }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
      // console.log(this.users);
  }



  ngOnInit() {
    this.getUsers();
  }
}
