import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl:'./main-page.component.html'
})

export class MainPageComponent  {
  public index:number=0;
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9500
    }
  ];
  onNewCharacter(character:Character):void{
    this.characters.push(character);

  }
  ondeleteCharacter(index:number):void{
    this.characters.slice(index,1);
  }

}
