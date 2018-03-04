import { Component, Input, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css'],
  providers: [AnimalService]
})
export class EditAnimalComponent implements OnInit {
   @Input() selectedAnimal;
   constructor(private animalService: AnimalService) { }

   ngOnInit() {
   }

   beginUpdatingAnimal(animalToUpdate){
     this.animalService.updateAnimal(animalToUpdate);
   }

    beginDeletingAnimal(animalToDelete){
      if(confirm("Are you sure you want to delete this animal from the record?")){
        this.animalService.deleteAnimal(animalToDelete);
      }
    }
}
