import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/home']);
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJLZXZpbiBWZW5lZ2FzIENvcmRvdmEiLCJpZENvbGVnaW8iOjEsImlkUGVyc29uYSI6MSwiaWRSb2wiOjEsImlhdCI6MTcwNzQxNzIyMCwiZXhwIjoxNzA3NTAzNjIwfQ.SB3u91Ss0rAkqJy9T9nMAFIO2Pyfc6IltzUvlyM2bAA'
    );
    if (localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
