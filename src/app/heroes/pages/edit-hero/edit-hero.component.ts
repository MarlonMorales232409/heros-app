import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styles: [
  ]
})
export class EditHeroComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.params
      .subscribe( r => console.log(r))
  }
}
