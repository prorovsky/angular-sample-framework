import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: FieldDefinition;
  @Input() film: any;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor() { }

  ngOnInit() {
  }
}
