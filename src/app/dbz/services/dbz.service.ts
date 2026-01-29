import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4} from 'uuid';
console.log(v4());
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: v4(),
      name: 'Goku',
      power: 10000
    },
    {
      id: v4(),
      name: 'Vegeta',
      power: 9500
    }
  ];
  addCharacter(character:Character):void{
    const newCharacter:Character={id: v4(), ...character}

    this.characters.push(newCharacter);
  }
  // ondeleteCharacter(index:number):void{
  //   console.log({index}, 'ondeleteCharacter');
  //   this.characters.splice(index,1);
  // }
 deleteCharacterById(id:string):void{
  console.log({id}, 'deleteCharacterById');
   this.characters=this.characters.filter(character=> character.id !==id);
 }


}
