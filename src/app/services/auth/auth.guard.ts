// import { CanActivateFn,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,Router, CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';
// import { SharedService } from '../shared.service'; 
// import { UserService } from '../user-service.service'; 

// export class AuthGuard implements CanActivate {
//   constructor(
//     private userAuthService: SharedService,
//     private router: Router,
//     private userService: UserService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     // if (this.userAuthService.getToken() !== null) {
//     //   const role = route.data['role'] as string;

//     //   if (role) {
//     //     const match = this.userService.roleMatch(role);

//     //     if (match) {
//     //       return true;
//     //     } else {
//     //       this.router.navigate(['/forbidden']);
//     //       return false;
//     //     }
//     //   }
//     // }

//     this.router.navigate(['/login']);
//     return false;
//   }
// }