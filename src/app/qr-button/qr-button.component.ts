import { Component, OnInit } from "@angular/core";
import { PointsToQrService } from "../points-to-qr.service";
import { Router } from "@angular/router";

import $ from "jquery";

@Component({
  selector: "app-qr-button",
  templateUrl: "./qr-button.component.html",
  styleUrls: ["./qr-button.component.scss"],
})
export class QrButtonComponent implements OnInit {
  private qrURL = "https://api.adambuczek.com/api/qry/wygeneruj";

  constructor(
    private pointsToQrService: PointsToQrService,
    private router: Router
  ) {
    this.pointsToQrService.sendPoints$.subscribe((points: number) => {
      this.generateQr(points);
    });
  }

  ngOnInit() {}

  generateQr(points: number) {
    $.ajax({
      url: this.qrURL,
      method: "POST",
      data: { points: points },
      success: res => {
        this.router.navigate(["/qr", res.string]);
      },
      error: res => {
        console.error(res);
        alert("API wyjebało");
      },
    });
  }

  requestPoints() {
    this.pointsToQrService.requestPoints();
  }
}
