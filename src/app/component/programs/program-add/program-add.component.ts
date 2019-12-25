import {Component, OnInit} from '@angular/core';
import {ProgramsModels} from '../../../interface/programs.models';
import {ProgramService} from '../../../services/program.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.scss']
})
export class ProgramAddComponent implements OnInit {
  createProgramForm: FormGroup;
  isSuccess: boolean;

  constructor(
    private programService: ProgramService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createProgramForm = this.fb.group({
      name: [null, Validators.required]
    });
  }

  createProgram() {
    if (this.createProgramForm.valid) {
      const category = this.createProgramForm.value;
      this.programService.addPrograms(category).subscribe(result => {
        this.isSuccess = true;
        this.createProgramForm.reset();
      }, error => {
        this.isSuccess = false;
      });
    }
  }
}
