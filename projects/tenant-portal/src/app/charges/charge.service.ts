import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ChargeService {
  private chargesUrl: string = environment.baseUrl + '/charges';

  constructor(private http: HttpClient) {}

  getCharges() {
    return this.http.get(this.chargesUrl);
  }

  getCharge(id) {
    return this.http.get(this.chargesUrl);
  }
}
