import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private http = inject(HttpClient);
  private router = inject(Router);

  private _token = signal<string | null>(localStorage.getItem("token"));

  public isLoggedIn = computed(() => !!this._token());
  public isLoading = signal(false);
  public errorMessage = signal<string | null>(null);

  getToken() {
    return this._token;
  }

  login(username: string, password: string): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.http.post<any>('http://localhost:8081/api/auth/login',
      { username, password }).subscribe(
        {
          next: (response : any) => {
            localStorage.setItem("token", response.token);
            this._token.set(response.token);
            this.router.navigate(['/home']);
          },
          error: (error : any) => {
            console.log(error);
            this.errorMessage.set(error.error.msg);
          },
          complete: () => {
            this.isLoading.set(false);
          }
        }
      )
  }

  logout(){
    this._token.set(null);
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
