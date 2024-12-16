import { AddCharacterComponent } from './../components/add-character/add-character.component';
import { Character } from './../interfaces/character.interface';

import { Component } from '@angular/core';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './name.component.html'
})

export class MainPageCompnent {
constructor(private  dbzService:DbzService){
}

get characters():Character[]{
return [...this.dbzService.characters];
}

onDeleteCharacter(id : string):void{
  this.dbzService.DeleteCharacterById(id);
}

onNewCaracter(character:Character){
this.dbzService.addCharater(character);
}
}
