import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { skills } from 'src/app/models/skills.models';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  infoGithub!: any;
  skills: any = skills;
  constructor(private githubService: GithubService){}
  ngOnInit(): void {
    this.githubService.getInfo().then((res) => {
      this.infoGithub = res;
    });
  }
}
