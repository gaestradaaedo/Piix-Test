import { Component, OnInit, AfterViewChecked, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CoverageModel } from '../models/coverage.model';

import { CoverageService } from '../services/coverage.service';

declare var Swiper: any;
declare var $: any;

@Component({
  selector: 'app-coverages',
  templateUrl: './coverages.component.html',
  styleUrls: ['./coverages.component.css']
})
export class CoveragesComponent implements OnInit, AfterViewChecked {

  coverages: CoverageModel[] = [];
  hasSlided: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public coverageIndex: number,
    public _coverages: CoverageService,
    public dialogRef: MatDialogRef<CoveragesComponent>
  ) { }

  ngOnInit() {
    this.getCoverages();
  }

  public ngAfterViewChecked(): void {
    if(!this.hasSlided){
      $('#coveragesCarousel').carousel(this.coverageIndex);
      this.hasSlided = true;
    }
  }

  getCoverages(){
    this.coverages = this._coverages.createCoverages();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
