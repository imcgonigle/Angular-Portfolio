import { Component, OnInit } from '@angular/core';

export class Project {
  id: number;
  title: string;
  imageUrls: string[];
  isFinished: boolean; 
}

const PROJECTS: Project[] = [
  {id: 1, title: 'Inventory Application', imageUrls: [], isFinished: true },
  {id: 2, title: 'Route Planner', imageUrls: [], isFinished: true },
  {id: 3, title: 'Zombie Risk', imageUrls: [], isFinished: true },
  {id: 4, title: 'Cards Against', imageUrls: [], isFinished: true },
  {id: 5, title: 'Galvanize Eats', imageUrls: [], isFinished: true },
  {id: 6, title: 'Lesson Box', imageUrls: [], isFinished: false }
]

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  projects = PROJECTS;

  constructor() { }

  ngOnInit() {

  }

}
