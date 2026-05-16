import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../services/auth-service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.getToken()() ?? "";

    if(token){
        const clonnedReq = req.clone({
            setHeaders: {
                'Authorization': token
            }
        })
        return next(clonnedReq);
    }
    return next(req);
}