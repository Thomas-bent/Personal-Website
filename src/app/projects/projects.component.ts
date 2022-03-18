import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  GITHUB_URL: string = 'https://api.github.com/users/Thomas-bent/repos';
  repos: any;

  constructor() {
    this.func();
  }

  async func() {
    await fetch(this.GITHUB_URL).then(data => data.json()).then(res => this.repos = res)
    console.table(this.repos)
  }
  ngOnInit(): void {
  }

}
