import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  private API_BASE_URL: string = '/api';

  constructor(public http: HttpClient) {
  }

  public getOrganizations() {
    return this.http.get(this.API_BASE_URL + '/organizations');
  }

}
