import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  headersOption = {
    headers: new HttpHeaders({
      "Authorization": "",
      "app-id": "5ff400160c997d269b0b9177"
    })
  };

  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) { }

  async post(data: any = null, url: string){
    this.spinner.show();
    return await new Promise((resolve, reject) => {
      this.httpClient.post(environment.host + url, data, this.headersOption)
        .toPromise()
        .then((result: any) => {
          this.spinner.hide();
          resolve(result);
        })
        .catch(error => {
          this.spinner.hide();
          reject(error.error);
        });
    });
  }

  async get(url: string){
    this.spinner.show();
    return await new Promise((resolve, reject) => {
      this.httpClient.get(environment.host + url, this.headersOption)
        .toPromise()
        .then((result: any) => {
          this.spinner.hide();
          resolve(result);
        })
        .catch(error => {
          this.spinner.hide();
          reject(error.error);
        });
    });
  }

}
