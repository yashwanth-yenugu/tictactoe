import { Component, OnInit, AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
=======

>>>>>>> 687d59058dab6bdeca535dbde15a19fabd86e39a
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit, AfterViewInit {
  allUsers: {}[];
  showField = false;
  user: any;
  randomId: any;
  name: any;
  animal: any;
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase, public dialog: MatDialog, private router: Router) {
    console.log('sa', db.list('users').valueChanges().subscribe(data => {
      console.log('sad', data);
      this.allUsers = data;
    }));
  }
  ngOnInit(): void {
    this.router.navigateByUrl('home');
  }
  ngAfterViewInit(): void {
    // this.openDialog();
  }
  showInput() {
    this.showField = true;
    this.randomId = Math.floor((Math.random() * 100000) + 1);
    localStorage.setItem('localUser', JSON.stringify({'id': this.randomId, 'user': this.user}));
    this.db.list('users').push({user: this.user, randomId:  this.randomId});
    this.router.navigateByUrl('usersList');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
  // tslint:disable-next-line:member-ordering
  title = 'app';
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

=======
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
>>>>>>> 687d59058dab6bdeca535dbde15a19fabd86e39a
}
