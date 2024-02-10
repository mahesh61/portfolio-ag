import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onIconCleck(icon:string){
   // if(icon ==='linkd'){location.href='https://www.linkedin.com/in/mahesh-nimmala-0476221a4'}
    //else if(icon==='github'){location.href='https://www.linkedin.com/in/mahesh-nimmala-0476221a4'}
  }
  openCv(){
    window.open('assets/img/Mahesh-Nimmala-SDE.pdf');
  }
}
