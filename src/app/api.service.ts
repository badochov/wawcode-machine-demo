import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bottle } from "./bottle.model";

import { map } from "rxjs/operators";
import { QrString } from "./qr-string.model";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getAllBottles(): Observable<Array<Bottle>> {
    return this.httpClient.get<Array<Bottle>>(API_URL + "/butelki");
  }

  public getQrString(points: number): Observable<QrString> {
    return this.httpClient.post<QrString>(API_URL + "/qry/wygeneruj", {
      points,
      api_token: environment.apiToken,
    });
  }
}
