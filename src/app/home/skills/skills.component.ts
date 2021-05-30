import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnChanges {

  constructor() { }
  elements:any
  @Input() data: any; 
  band:boolean=false
  
 
  ngOnChanges(changes: SimpleChanges) {
    this.elements={
      bookmark:changes.data.currentValue.bookmark,
      tech:changes.data.currentValue.tech,
      percentage:changes.data.currentValue.percentage,
    }
    console.log(this.elements)
    this.band=true
  }
  

}
