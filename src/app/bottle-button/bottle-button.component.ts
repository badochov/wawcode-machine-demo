import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bottle-button",
  templateUrl: "./bottle-button.component.html",
  styleUrls: ["./bottle-button.component.scss"],
})
export class BottleButtonComponent implements OnInit {
  @Input() bottle: { points: number; name: string; color: string };

  @Output() addBottlePoints = new EventEmitter();

  points: number;
  name: string;
  color: string;

  constructor() {}

  ngOnInit() {
    ({ points: this.points, name: this.name, color: this.color } = this.bottle);
  }

  addPoints(): void {
    this.addBottlePoints.emit(this.points);
  }
}
