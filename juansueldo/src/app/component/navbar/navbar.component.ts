import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { items } from 'src/app/models/items.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('toggleBtn') toggleBtn!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  @ViewChild('buttonColor') buttonColor!: ElementRef;
  isToggled: boolean = false;
  activeItem: string = 'Inicio';
  items: any = items; 

  ngAfterViewInit() {
    this.button.nativeElement.addEventListener('click', () => {
      this.button.nativeElement.classList.toggle('is-active-button');
    });

    this.toggleBtn.nativeElement.addEventListener('click', () => {
      this.menu.nativeElement.classList.toggle('visibility');

      if (this.menu.nativeElement.classList.contains('visibility')) {
        this.toggleBtn.nativeElement.setAttribute('aria-label', 'Cerrar menú');
      } else {
        this.toggleBtn.nativeElement.setAttribute('aria-label', 'Abrir menú');
      }
      this.toggleBtn.nativeElement.classList.toggle('is-active');
    });
  }
  toggleButton() {
    this.isToggled = !this.isToggled;
  }
  setActiveItem(item: string) {
    this.activeItem = item; 
    console.log(this.activeItem);
  }
}
