import { Component, OnInit } from "@angular/core";
import { PointsToQrService } from "../points-to-qr.service";
import { Router } from "@angular/router";

import $ from "jquery";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";
import { QrString } from "../qr-string.model";

@Component({
  selector: "app-qr-button",
  templateUrl: "./qr-button.component.html",
  styleUrls: ["./qr-button.component.scss"],
})
export class QrButtonComponent implements OnInit {
  private qrURL = `${environment.apiUrl}/api/qry/wygeneruj`;

  constructor(
    private pointsToQrService: PointsToQrService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.pointsToQrService.sendPoints$.subscribe((points: number) => {
      this.generateQr(points);
    });
  }

  ngOnInit() {}

  generateQr(points: number) {
    this.apiService
      .getQrString(points)
      .subscribe(qrString => this.router.navigate(["/qr", qrString.string]));
  }

  requestPoints() {
    this.pointsToQrService.requestPoints();
  }
}
