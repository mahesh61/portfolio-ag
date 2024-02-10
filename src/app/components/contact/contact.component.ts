import { Component, OnInit } from '@angular/core';
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isvalidOrSent: boolean = false
  msg: string = '';
  msgColor:string= '#59b256';

  formObj:any={
    name:'',subject:'', message:'',email:''
  }

  sendEmail(args: any) {
    console.log(args)
    if (args.form.status === "VALID") {
      emailjs
        .sendForm("service_crxzrc8", "template_1kksq4a","#contact-form","b3NYF4GlZVspehfT4" )
        .then(
          (result) => {
            this.isvalidOrSent = true;
            this.msg = "Thank You ..!";
            this.msgColor="#59b256";
            this.formObj={
              name:'',subject:'', message:'',email:''
            }
          },
          (error) => {
            this.isvalidOrSent = true;
            this.msg = "Error Occured...!";
            this.msgColor="red";
          }
        );
    } else {
      this.isvalidOrSent = true;
      this.msg = "plaese fill all fields";
      this.msgColor="red";
    }



  };

}
