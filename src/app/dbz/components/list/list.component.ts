import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter<number>();

  @Input()
   public characterList: Character[] = [];

  emitDelete(index: number):void{
    console.log({index}, 'emitDelete');
    this.onDeleteId.emit(index);
  }

  onDeleteCharacter(index: number):void{
   console.log({index});

  }

}
