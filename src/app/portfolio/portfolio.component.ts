import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';

const PROJECTS: Project[] = [
  {
    id: 1, 
    title: 'Inventory Application', 
    description: 'A web application that makes it easy to managae inventories from where ever you are.', 
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl:"https://inventory-application.herokuapp.com/",
    repoUrl: '', 
    isFinished: true,
    isFeatured: true 
  },
  {
    id: 2, 
    title: 'Route Planner', 
    description: 'A logistics application that helps solve the problem of finding the fastest route.', 
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [],
    projectUrl: 'https://todo-list-2d655.firebaseapp.com',
    repoUrl: '',
    isFinished: true,
    isFeatured: true
   },
  {
    id: 3, 
    title: 'Zombie Risk', 
    description: 'A Zombie vs Football version of the board game Risk. The project won prizes for best use of MapQuest and best game.', 
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: true,
    isFeatured: true
  },
  {
    id: 4, 
    title: 'Cards Against', 
    description: 'An iOS application version of the popular party game Cards Against Humanity.', 
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: true,
    isFeatured: true
  },
  {
    id: 5, 
    title: 'Denver Eats', 
    description: 'Denver Eats is a landing page and menu website for a fictional resturaunt.',
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: true,
    isFeatured: true 
  },
  {
    id: 6, 
    title: 'Lesson Box', 
    description: 'An application that makes it easy for educators to create lesson plans and develop course curriculums.', 
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: false,
    isFeatured: false
   }
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
