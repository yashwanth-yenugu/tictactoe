import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    console.log('ssas', this.db.list('tictacTry1').remove('LLmvTkFodFcGgt2y3vs'));
  }
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
  // tslint:disable-next-line:member-ordering
  title = 'app';
}
