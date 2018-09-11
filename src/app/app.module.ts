import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatToolbarModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicTokComponent } from './tic-tok/tic-tok.component';
import { FormControl } from '@angular/forms';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MyUsersListComponent } from './my-users-list/my-users-list.component';
import { BaseComponentComponent } from './base-component/base-component.component';
const routes: Routes = [{
  path: 'letsPlay', component: TicTokComponent}, {
  path: 'usersList', component: MyUsersListComponent
}, {
  path: 'home', component: BaseComponentComponent
},
{ path: '', component: LoginBoardComponent },
{ path: 'play/:id', component: GameBoardComponent },
{ path: '**', component: LoginBoardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    TicTokComponent,
    MyUsersListComponent,
    BaseComponentComponent,
    LoginBoardComponent, GameBoardComponent]
  ,  entryComponents: [
    DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatDialogModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
