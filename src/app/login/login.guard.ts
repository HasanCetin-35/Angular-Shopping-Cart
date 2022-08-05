import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account.service";

@Injectable(

)
export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router) {

    }
    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {//next gitmek istediği yer , state bulunduğu yer
        let logged = this.accountService.isloggedIn();
        if (logged) {
            return true
        }
        this.router.navigate(["login"]);
        return false;
    }
}