import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-users-list',
  templateUrl: './my-users-list.component.html',
  styleUrls: ['./my-users-list.component.css']
})
export class MyUsersListComponent implements OnInit {

  myNumber: any;
  allUsers: any;
  constructor(public db: AngularFireDatabase, private route: Router) {
    db.list('users').valueChanges().subscribe(data => {
      this.allUsers = data;
    });
   }

  ngOnInit() {
    this.myNumber = JSON.parse(localStorage.getItem('localUser'));
    console.log('my', this.myNumber);
  }
  startGame(id) {
    this.route.navigateByUrl('letsPlay');
  }
}
