import {Component, OnInit} from '@angular/core';
import {ProgramsModels} from '../../../interface/programs.models';
import {ProgramService} from '../../../services/program.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.scss']
})
export class ProgramAddComponent implements OnInit {
  createProgramForm: FormGroup;
  isSuccess: boolean;
  learningProgram: Partial<ProgramsModels>;

  constructor(
    private programService: ProgramService,
    private fb: FormBuilder
  ) {
    this.createProgramForm = new FormGroup({
      learningProgram: new FormControl('')
    });
    this.learningProgram = {
      learningProgram: ''
    };
  }

  ngOnInit() {
    this.createProgramForm = this.fb.group({
      learningProgram: [null, Validators.required]
    });
  }

  createProgram() {
    if (this.createProgramForm.valid) {
      const programsModels = this.createProgramForm.value;
      this.programService.addPrograms(this.learningProgram).subscribe(result => {
        this.isSuccess = true;
        this.createProgramForm.reset();
      }, error => {
        this.isSuccess = false;
      });
    }
  }
}
