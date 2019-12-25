import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProgramsModels} from '../../../interface/programs.models';
import {ActivatedRoute} from '@angular/router';
import {ProgramService} from '../../../services/program.service';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.scss']
})
export class ProgramEditComponent implements OnInit {
  isSuccess: boolean;
  program: ProgramsModels;
  editProgramForm: FormGroup;
  constructor(private fb: FormBuilder,
              private programService: ProgramService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.editProgramForm = this.fb.group({
      name: [null, Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProgramBy(id);
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const {value} = this.editProgramForm;
    value.id = id;
    this.editCategory(value);
  }

  getProgramBy(id: number) {
    this.programService.getProgram(id).subscribe(result => {
      this.program = result;
      this.editProgramForm.patchValue(this.program);
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

  editCategory(value: any) {
    this.programService.updateProgram(value).subscribe(result => {
      this.isSuccess = true;
    }, error => {
      console.log('error');
    });
  }

}
