import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  public herosName: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public delatedHero?: string ;

removeLastHero(): void {
  this.delatedHero = this.herosName.pop();
}




}



















