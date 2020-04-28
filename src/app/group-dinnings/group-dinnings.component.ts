import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-group-dinnings',
  templateUrl: './group-dinnings.component.html',
  styleUrls: ['./group-dinnings.component.css']
})
export class GroupDinningsComponent implements OnInit {

  constructor(private navbar: NavbarService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.navbar.navbar();
  }

}
