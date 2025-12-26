import { Component, AfterViewInit } from '@angular/core';
import { CV_DATA } from './cv-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  cvData = CV_DATA;
  allTechs: string[] = [];

  constructor() {
    this.allTechs = [
      ...this.cvData.skills.languages,
      ...this.cvData.skills.frameworks,
      ...this.cvData.skills.databases,
      ...this.cvData.skills.tools
    ];
  }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }

  getSkillIcon(skill: string): string {
    const icons: { [key: string]: string } = {
      // Languages
      'Java JEE': 'fa-brands fa-java',
      'JavaScript': 'fa-brands fa-js',
      'TypeScript': 'fa-brands fa-js',
      'Python': 'fa-brands fa-python',
      'C/C++': 'fa-solid fa-code',
      'PHP': 'fa-brands fa-php',

      // Frameworks
      'Spring Boot': 'fa-solid fa-leaf',
      'React': 'fa-brands fa-react',
      'Angular': 'fa-brands fa-angular',
      'Laravel': 'fa-brands fa-laravel',
      'Node': 'fa-brands fa-node-js',
      'Node.js': 'fa-brands fa-node-js',

      // Databases
      'MySQL': 'fa-solid fa-database',
      'PostgreSQL': 'fa-solid fa-database',
      'MongoDB': 'fa-solid fa-leaf',

      // Tools
      'Git': 'fa-brands fa-git-alt',
      'GitHub': 'fa-brands fa-github',
      'SonarQube': 'fa-solid fa-bug',
      'AWS S3': 'fa-brands fa-aws',
      'Agile Scrum': 'fa-solid fa-users-gear'
    };
    return icons[skill] || 'fa-solid fa-code';
  }
}
