import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { slideInAnimation } from "../app.component";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.component.html",
  styleUrls: ["./qr.component.scss"],
  animations: [slideInAnimation],
})
export class QrComponent implements OnInit {
  string: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => (this.string = params.string));
  }
}
