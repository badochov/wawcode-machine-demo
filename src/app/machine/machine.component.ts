import { Component, OnInit } from "@angular/core";
import { slideInAnimation } from "../app.component";

@Component({
  selector: "app-machine",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class MachineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
