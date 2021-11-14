import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reg-nutri',
  templateUrl: './reg-nutri.component.html',
  styleUrls: ['./reg-nutri.component.css']
})
export class RegNutriComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
