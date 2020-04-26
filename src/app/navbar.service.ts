import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  navbar(){
    window.addEventListener('scroll',()=>{
      let scroll=window.scrollY;
      let navbar=document.getElementById('navbarId');

      if(scroll > 680){
        navbar.style.display="flex";
      }
      else{
        navbar.style.display="none";
      }
    });
  }
}
