import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { MatButtonModule, MatDialogModule, MatToolbarModule, MatCardModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: LoginBoardComponent },
  { path: 'play/:id', component: GameBoardComponent },
  { path: '**', component: LoginBoardComponent }
];

@NgModule({
  declarations: [AppComponent, LoginBoardComponent, GameBoardComponent],
  entryComponents: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatDialogModule, MatToolbarModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
