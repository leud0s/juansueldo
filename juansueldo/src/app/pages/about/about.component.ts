import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { skills } from 'src/app/models/skills.models';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
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
