import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  allUsers: {}[];
  showField = false;
  user: any;
  randomId: any;
  name: any;
  animal: any;
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase, public dialog: MatDialog) {
    console.log('sa', db.list('users').valueChanges().subscribe(data => {
      console.log('sad', data);
      this.allUsers = data;
    }));
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.openDialog();
  }
  showInput() {
    this.showField = true;
    this.randomId = Math.floor((Math.random() * 100000) + 1);
    this.db.list('users').push({user: this.user, randomId:  this.randomId});
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

}
