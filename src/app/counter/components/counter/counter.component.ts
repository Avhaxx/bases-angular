import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: false,
  templateUrl: "./counter.component.html",
  styleUrl: "./counter.component.css",

})
export class CounterComponent {
  public title: string = "Counter App";
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
