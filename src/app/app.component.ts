import {Component, OnInit} from '@angular/core';
import {UserService} from './core/services/user.service';
import {UserModel} from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ci-demo-front';
  users: UserModel[] = [];
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    console.log('coucou les amis saleu');
    this.userService.getUsers().subscribe( data => {
      this.users = data;
    });
  }
}
