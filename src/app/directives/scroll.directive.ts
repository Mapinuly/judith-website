import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HostListener, Inject, Injectable, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrolled]',
})
export class ScrollEventDirective implements OnInit, OnDestroy {

  // public isScrolled: boolean = false;
  @HostBinding('class.app-scrolled') isScrolled = false;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) { }




  @HostListener('window:scroll', []) onWindowsScroll() {
    this.isScrolled = document.documentElement.scrollTop > 100;
    // console.log('scrolled', this.isScrolled);

  }

  ngOnInit(): void {

    //this.el.nativeElement.style.backgroundColor = 'green';
  }
  ngOnDestroy(): void {

  }



}
//dropdowd directive
// import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

// @Directive({
//     selector: '[appDropDown]',
// })
// export class DropsownDirective{

// @HostBinding('class.open') isopen = false;
// @HostListener('mouseenter') onMouseEnter(){
// this.isopen = !this.isopen;
// }
// @HostListener('mouseleave') onMouseLeave(){
//     this.isopen = !this.isopen;
// }
// }

// <div class="col-xs-12">
//         <div class="btn-group" appDropDown>
//         <button class="btn btn-primary dropdown-toggle">
//             Manage Movie <span class="caret"></span>
//         </button>
//         <ul class="dropdown-menu">
//             <li><a href="#">To watching List</a></li>
//             <li><a href="#">Edit Movie</a></li>
//             <li><a href="#">Delete Movie</a></li>
//         </ul>
//     </div>