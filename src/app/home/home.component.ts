import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navbar: NavbarService) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.navbar.navbar();
  }

}