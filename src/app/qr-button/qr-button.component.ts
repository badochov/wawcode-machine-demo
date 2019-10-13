import { Component, OnInit, Input } from "@angular/core";
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
  @Input() points: number;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {}

  generateQr() {
    console.log(this.points);
    this.apiService
      .getQrString(this.points)
      .subscribe(qrString => this.router.navigate(["/qr", qrString.string]));
  }
}
