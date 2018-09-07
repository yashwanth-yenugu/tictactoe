import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-board',
  templateUrl: './login-board.component.html',
  styleUrls: ['./login-board.component.css']
})
export class LoginBoardComponent implements OnInit {

  allUsers: {}[];
  user: any;
  randomId: any;

  constructor(public db: AngularFireDatabase, private _router: Router) { }

  ngOnInit() {
    this.db.list('users')
    .valueChanges()
    .subscribe(data => {
      console.log('sad', data);
      this.allUsers = data;
    });
  }

  showInput() {
    this.randomId = Math.floor(Math.random() * 99999999 + 1);
    this._router.navigateByUrl('play/:' + this.randomId);
    this.db.list('users').push({ user: this.user, randomId: this.randomId });
  }

}
