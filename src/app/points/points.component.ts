import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { PointsToQrService } from "../points-to-qr.service";

@Component({
  selector: "app-points",
  templateUrl: "./points.component.html",
  styleUrls: ["./points.component.scss"],
})
export class PointsComponent implements OnInit {
  bottles = of([
    { points: 1, name: "szklana", color: "red" },
    { points: 5, name: "plastikowa", color: "green" },
    { points: 10, name: "papierowa", color: "lime" },
  ]);
  points = 0;

  constructor(private pointsToQrService: PointsToQrService) {
    this.pointsToQrService.requestPoints$.subscribe(() => {
      this.pointsToQrService.sendPoints(this.points);
    });
  }

  ngOnInit() {}

  addPoints(points: number): void {
    this.points += points;
  }
}
