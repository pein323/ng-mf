import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserService} from '@ng-mf/data-access-user';
import {HaUiLibComponent} from "@ng-mf/ha-ui-lib";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, HaUiLibComponent],
  selector: 'ng-mf-login-entry',
  template: `
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username"/>
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password"/>
        </label>
        <lib-ha-ui-lib></lib-ha-ui-lib>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
    </div>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }

      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }

      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  private userService = inject(UserService);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
