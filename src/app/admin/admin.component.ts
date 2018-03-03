import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AnimalService]
})
export class AdminComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  submitForm(specie: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
     var newAnimal: Animal = new Animal(specie, name, age, diet, location, caretakers, sex, likes, dislikes);
     this.animalService.addAnimal(newAnimal);
  }
}
