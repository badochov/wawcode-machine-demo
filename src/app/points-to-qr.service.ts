import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PointsToQrService {
  requestPoints$: Observable<any>;

  private requestPointsSubject = new Subject<any>();
  sendPoints$: Observable<any>;

  private sendPointsSubject = new Subject<any>();

  constructor() {
    this.sendPoints$ = this.sendPointsSubject.asObservable();
    this.requestPoints$ = this.requestPointsSubject.asObservable();
  }

  requestPoints(): void {
    this.sendPointsSubject.next(0);
    this.requestPointsSubject.next();
  }

  sendPoints(points: number) {
    this.sendPointsSubject.next(points);
  }
}
