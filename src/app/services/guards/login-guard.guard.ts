import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public usuarioService: UsuarioService,
               public router: Router){}


  canActivate() {

    if( this.usuarioService.estaLogueado() ){
      console.log('Paso el Guard');
      return true;
    }else{
      console.log('Bloquedao por el Guard');
      this.router.navigate(['/login']);
      return false;
    }
  }

}