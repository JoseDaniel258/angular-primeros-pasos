import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10

  }];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletCaracter(id ?: string): void {

    if(!id)return;

    console.log(id);

    // TOD emitir el id del personaje
this.onDelete.emit(id);
  }

}
