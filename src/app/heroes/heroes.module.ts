import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { List } from "./list/list";
import { Hero } from "./hero/hero";
@NgModule({
  declarations: [List, Hero],
  imports: [CommonModule],
  exports: [List, Hero]
})
export class HeroesModule { }
