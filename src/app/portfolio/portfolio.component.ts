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
    imageUrls: ['assets/images/projects/project-1-thumbnail.png'], 
    projectUrl:"https://inventory-application.herokuapp.com/",
    repoUrl: 'https://github.com/imcgonigle/Capstone-Project-Inventory-Application', 
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
    imageUrls: ['assets/images/projects/project-2-thumbnail.png'],
    projectUrl: 'https://todo-list-2d655.firebaseapp.com',
    repoUrl: 'https://github.com/imcgonigle/Route-Planner',
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
    imageUrls: ['assets/images/projects/project-3-thumbnail.png'], 
    projectUrl: 'https://zombie-risk.firebaseapp.com/',
    repoUrl: 'https://github.com/imcgonigle/Zombie-Risk', 
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
    imageUrls: ['assets/images/projects/project-4-thumbnail.png'], 
    projectUrl: '',
    repoUrl: 'https://github.com/imcgonigle/CodersAgainst', 
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
    imageUrls: ['assets/images/projects/project-5-thumbnail.png'], 
    projectUrl: 'https://g31-galvanize-eats.firebaseapp.com/',
    repoUrl: 'https://github.com/imcgonigle/Denver-Eats', 
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
    repoUrl: 'https://github.com/imcgonigle/Lesson-Box', 
    isFinished: false,
    isFeatured: false
   },
   {
    id: 7, 
    title: 'G-Space', 
    description: 'A social networking application for past and present Galvanize students.',
    features: [],
    technologies: [],
    tags: [],
    imageUrls: ['assets/images/projects/project-7-thumbnail.png'], 
    projectUrl: 'https://gspace-app.herokuapp.com/',
    repoUrl: 'https://github.com/imcgonigle/gSpace', 
    isFinished: true,
    isFeatured: false 
  },
  {
    id: 8, 
    title: 'Angular 1.5 Forum', 
    description: 'A Reddit style forum made using angular 1.5.',
    features: [],
    technologies: [],
    tags: [],
    imageUrls: ['assets/images/projects/project-8-thumbnail.png'], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: true,
    isFeatured: false 
  },
  {
    id: 9, 
    title: 'Target Timer', 
    description: 'An Android application that helps users practice their shooting skills.',
    features: [],
    technologies: [],
    tags: [],
    imageUrls: ['assets/images/projects/project-9-thumbnail.jpg'], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: true,
    isFeatured: false 
  },
  {
    id: 10, 
    title: 'Heart to Heart', 
    description: 'An iOS and Android application designed by a third-grade class.',
    features: [],
    technologies: [],
    tags: [],
    imageUrls: [], 
    projectUrl: '',
    repoUrl: '', 
    isFinished: false,
    isFeatured: true 
  },
  {
    id: 11, 
    title: 'Project Wheatgrass', 
    description: 'An Uber style application that helps users find people willing to do small chores for a price.',
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
