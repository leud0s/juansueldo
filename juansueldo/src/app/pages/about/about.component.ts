import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  infoGithub!: any;
  constructor(private githubService: GithubService){}
  ngOnInit(): void {
    this.githubService.getInfo().then((res) => {
      this.infoGithub = res;
    });
  }
}
