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
  public onDeleteId: EventEmitter<string> = new EventEmitter<string>();

  @Input()
   public characterList: Character[] = [];

  emitDelete(id: string):void{
      console.log(id, 'emitDelete');

    this.onDeleteId.emit(id);


  }
}
