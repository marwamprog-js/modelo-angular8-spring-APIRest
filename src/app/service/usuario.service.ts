import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { UserReport } from '../model/UserReport';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) {
  }

  /**
   * Lista todas as Profissões
   */
  getProfissaoList(): Observable<any> {
    return this.http.get<any>(AppConstants.getBaseUrlPath + 'profissao/');
  }


  /**
   * Lista todos os Usuários
   */
  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }


  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }


  getStudant(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }


  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }


  //http://localhost:8080/cursospringrestapi/usuario/usuarioPorNome/alex
  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);

  }


    consultarUserPoPage(nome: String, page : Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);

  }

  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }

  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }



  removerTelefonte(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id, {responseType: 'text'});
  }

  userAutenticado() {

    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Download do PDF
   */
  downloadPdfRelatorio() {
    return this.http.get(AppConstants.baseUrl + 'relatorio', {responseType: 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }

   /**
   * Download do PDF com Parametros
   */
  downloadPdfRelatorioParam(userReport: UserReport) {
    return this.http.post(AppConstants.baseUrl + 'relatorio/', userReport, {responseType: 'text'}).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }


  /**
   * GRAFICO
   */
  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrl + 'grafico');
  }


}
