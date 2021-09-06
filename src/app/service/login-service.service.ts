import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Método para recuperar Login
   */
  recuperar(login) {

    let user = new User();
    user.login = login;

    console.log(user);
    
    return this.http.post(AppConstants.getBaseUrlPath + "recuperar/", user).subscribe(data => {
      alert(JSON.parse(JSON.stringify(data)).error);
    },
      error => {

        console.error("Erro ao recuperar login ");
        alert('Erro ao recuperar login!');
      }
    );
  }


  /**
   * 
   * @param usuario 
   * Método para autenticar na API
   */
  login(usuario) {

    console.log(usuario);

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno Http*/

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      console.log(token);

      localStorage.setItem("token", token);

      console.info("Tohken: " + localStorage.getItem("token"));

      this.router.navigate(['home']);


    },
      error => {

        console.error("Erro ao fazer login ");
        alert('Acesso Negado!')
      }
    );
  }

}
