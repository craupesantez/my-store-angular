import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Cesar';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  names: string[] = ['cesar', 'carlos', 'mireya'];
  newName = '';
  register = {
    name: '',
    email:'',
    password: '',
  }
  box= {
    width: 100,
    height: 100,
    background: 'red'
  }
  products : Product[]= [
    {
      name: 'el mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category:'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleccion de albumes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    }
  ]

  person ={
    name: 'cesar',
    age : 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increasseAge(){
    this.person.age+= 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
  onRegister(){
    console.log(this.register);
  }
}
