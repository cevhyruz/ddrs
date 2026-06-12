import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    RouterLink, IconDirective, ContainerComponent, RowComponent, ColComponent,
    CardGroupComponent, CardComponent, CardBodyComponent, FormDirective,
    InputGroupComponent, InputGroupTextDirective, FormControlDirective,
    ButtonDirective
  ]
})
export class Login {
  readonly #http = inject(HttpClient);

  readonly loginProgress = signal(false);

  readonly mockCurrentUser = signal<{
    username: string;
    role: string;
    name: string;
  } | null>(null);

  // signal
  readonly mockIsAdmin = computed(() => {
    return this.mockCurrentUser()?.role === 'admin';
  });

  readonly mockUsers = [
    {
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      name: 'System Administrator'
    },
  ];

  // login function should just:
  // [/] send credentials
  // [/] show login progress
  // [/] handle response/errors
  login(username: string, password: string) {
    this.loginProgress.set(true);
    return this.#http.post('/auth/login', { username, password }).pipe(
      finalize(() => this.loginProgress.set(true))
    )
    .subscribe({
      next: (success) => {
        console.log(success, '');
      },
      error: (err) => {
        console.log(err, '');
      }
    })
  }

  mockLogin(username: string, password: string) {
    const isAdmin = this.mockUsers.find( user =>
      user.username === username &&
      user.password === password
    );
    // setup current mock user
    if(isAdmin) {
      this.mockCurrentUser()?.role === 'admin';
    } {

    }
  }

}
