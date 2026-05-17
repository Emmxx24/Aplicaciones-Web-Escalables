import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../services/auth-service";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.getToken()() ?? "";

    let clonnedRed = req;

    if (token) {
        clonnedRed = req.clone({
            setHeaders: {
                'Authorization' : token
            }
        })
    }
    return next(clonnedRed).pipe(
        catchError((error: HttpErrorResponse) => {
            if(error.status === 401){
                authService.logout();
            }
            return throwError(() => error);
        })
    );
}