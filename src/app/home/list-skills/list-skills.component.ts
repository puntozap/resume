import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-skills',
  templateUrl: './list-skills.component.html',
  styleUrls: ['./list-skills.component.scss']
})
export class ListSkillsComponent implements OnInit {

  constructor() { }
  data=[
    {
      bookmark:"translate",
      tech:"Spanish",
      percentage:"100%",
    },
    {
      bookmark:"translate",
      tech:"English",
      percentage:"60%",
    },
    {
      bookmark:"bookmark",
      tech:"Native",
      percentage:"75%",
    },
    {
      bookmark:"bookmark",
      tech:"Laravel",
      percentage:"75%",
    },
    {
      bookmark:"bookmark",
      tech:"Native",
      percentage:"75%",
    },
    {
      bookmark:"bookmark",
      tech:"Javascript",
      percentage:"90%",
    },
    {
      bookmark:"bookmark",
      tech:"Angular",
      percentage:"75%",
    },
    {
      bookmark:"bookmark",
      tech:"HTML",
      percentage:"95%",
    },
    {
      bookmark:"bookmark",
      tech:"CSS",
      percentage:"85%",
    },
    {
      bookmark:"bookmark",
      tech:"Flexbox",
      percentage:"60%",
    },
    {
      bookmark:"bookmark",
      tech:"Bootstrap",
      percentage:"80%",
    },
    {
      bookmark:"bookmark",
      tech:"Material Design",
      percentage:"70%",
    },



    
    {
      bookmark:"bookmark",
      tech:"Database Modeling",
      percentage:"100%",
    },
    
    {
      bookmark:"bookmark",
      tech:"Api Restful",
      percentage:"90%",
    },
    
    {
      bookmark:"bookmark",
      tech:"Laravel passport",
      percentage:"95%",
    },


    {
      bookmark:"bookmark",
      tech:"Good Comunication",
      percentage:"100%",
    },
    
    {
      bookmark:"bookmark",
      tech:"Puntuality",
      percentage:"90%",
    },
    
    {
      bookmark:"bookmark",
      tech:"Creativity",
      percentage:"95%",
    },
    
    
    {
      bookmark:"bookmark",
      tech:"Organized",
      percentage:"100%",
    },

    
  ]
  ngOnInit(): void {
  }

}
