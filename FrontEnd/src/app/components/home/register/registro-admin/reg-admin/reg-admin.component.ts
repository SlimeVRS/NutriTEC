import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reg-admin',
  templateUrl: './reg-admin.component.html',
  styleUrls: ['./reg-admin.component.css']
})
export class RegAdminComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
