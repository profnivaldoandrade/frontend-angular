import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { ListusersService } from "../services/listusers.service";
import { catchError, map } from "rxjs";

export const authGuard = (): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        const listuserService = inject(ListusersService)
        const router = inject(Router)

        return listuserService.listusers().pipe(
            catchError(()=>{
                return router.navigate(['login'])
            }),
            map(()=>{
                return true
            })

        )
    }
}