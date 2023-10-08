import { Component } from '@angular/core';
import {Project} from "../_models/Project";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  selectedProject?: Project;
  projects: Project[] = [];
  projectImages = Array<string>(
    'assets/projects/First project/main.webp',
    'assets/projects/Second project/main.webp',
    'assets/projects/Third project/main.webp',
    'assets/projects/Fourth project/main.webp',
    'assets/projects/N-th project/main.webp',
  );
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<Project[]>('assets/projects.json').subscribe(data => {
      this.projects = data;
    });
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    console.log(project);
  }

  deselectProject(): void {
    this.selectedProject = undefined;
  }
}




