import { Component, OnInit } from "@angular/core";
import { of, Observable } from "rxjs";
import { PointsToQrService } from "../points-to-qr.service";
import { Bottle } from "../bottle.model";

import $ from "jquery";
import { environment } from "src/environments/environment";
import { ApiService } from "../api.service";

@Component({
  selector: "app-points",
  templateUrl: "./points.component.html",
  styleUrls: ["./points.component.scss"],
})
export class PointsComponent implements OnInit {
  bottles: Observable<Array<Bottle>>;
  points = 0;
  bottlesURL = `${environment.apiUrl}/butelki/`;

  constructor(
    private pointsToQrService: PointsToQrService,
    private apiService: ApiService
  ) {
    this.pointsToQrService.requestPoints$.subscribe(() => {
      this.pointsToQrService.sendPoints(this.points);
    });

    this.bottles = this.apiService.getAllBottles();
  }

  ngOnInit() {}

  addPoints(points: number): void {
    this.points += points;
  }
}
