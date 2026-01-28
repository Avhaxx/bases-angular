import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero {

public name: string = 'Superman';
public age: number = 500;

get capitalizedName(): string {
  return this.name.toUpperCase()+'-'+ this.age;
}

getHeroDescription(): string {
  return this.name.toUpperCase()  + ' - ' + this.age;

}
changeHero(): void {

  this.name = 'Batman';
}
changeAge():void {
  this.age = 1250;
}

}
