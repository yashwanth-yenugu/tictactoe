import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {

  user: any;
  randomId: number;
  showField: boolean;
  constructor(public db: AngularFireDatabase,  private router: Router) { }

  ngOnInit() {
  }
  showInput() {
    this.showField = true;
    this.randomId = Math.floor((Math.random() * 100000) + 1);
    localStorage.setItem('localUser', JSON.stringify({'id': this.randomId, 'user': this.user}));
    this.db.list('users').push({user: this.user, randomId:  this.randomId});
    this.router.navigateByUrl('usersList');
  }
}
