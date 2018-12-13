import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { CoveragesComponent } from '../coverages/coverages.component';

import { CoverageModel } from '../models/coverage.model';

import { CoverageService } from '../services/coverage.service';

declare var Swiper: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewChecked {

  coverages: CoverageModel[] = [];
  coveragesDialogRef: MatDialogRef<CoveragesComponent>;
  hasInited: boolean = false;

  constructor(
    private dialog: MatDialog,
    public _coverages: CoverageService
  ) { }

  ngOnInit() {
    this.getCoverages();
  }

  ngAfterViewChecked(){
    if(!this.hasInited){
      this.initSwiper();
      this.hasInited = true;
    }
  }

  initSwiper(){
    let windowWidth = window.innerWidth;
    let slidesPerView = 6;
    let spaceBetween = 20;
    
    if(windowWidth <= 542){
      slidesPerView = 3;
      spaceBetween = 10;
    }
    if(windowWidth <= 410){
      spaceBetween = 5;
    }
    if(windowWidth <= 392){
      slidesPerView = 2;
      spaceBetween = 0;
    }
    if(windowWidth <= 325){
      spaceBetween = 10;
    }

    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      centeredSlides: true,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    
    if(windowWidth <= 392){
      mySwiper.slideTo(0, 0, false);
    }
    else if(windowWidth <= 542){
      mySwiper.slideTo(1, 0, false);
    }
    else{
      mySwiper.slideTo(2, 0, false);
    }
  }

  getCoverages(){
    this.coverages = this._coverages.createCoverages();
  }

  imageAction(image: any, enter: boolean){
    if(enter){
      image.currentTarget.parentElement.lastElementChild.classList.add("show");
    }
    else{
      image.currentTarget.parentElement.lastElementChild.classList.remove("show");
    }
  }

  openCoveragesModal(index: number){
    this.coveragesDialogRef = this.dialog.open(CoveragesComponent, {
      height: 'auto',
      id: 'coverages-modal',
      disableClose: true,
      autoFocus: false,
      data: index
    });
  }
}