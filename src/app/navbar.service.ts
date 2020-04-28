import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  navbar(){
    let navbar=document.getElementById('navbarId');
    navbar.style.display="none";
    
    window.addEventListener('scroll',()=>{
      let scroll=window.scrollY;

      if(scroll > 680){
        navbar.style.display="flex";
      }
      else{
        navbar.style.display="none";
      }
    });
  }
}
