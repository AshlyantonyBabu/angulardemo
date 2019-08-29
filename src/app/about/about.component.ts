import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
cname
name
  constructor(private r:ActivatedRoute ) { }

  ngOnInit() {
    this.cname=this.r.snapshot.paramMap.get('name')
    this.name=this.r.snapshot.paramMap.get('cname')
  }

}
