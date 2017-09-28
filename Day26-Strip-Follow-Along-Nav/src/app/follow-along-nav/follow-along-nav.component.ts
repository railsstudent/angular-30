import { Component, OnInit, ViewChild, QueryList, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-follow-along-nav',
  templateUrl: './follow-along-nav.component.html',
  styleUrls: ['./follow-along-nav.component.css']
})
export class FollowAlongNavComponent implements OnInit {

  @ViewChild('dropdownBackground')
  background: ElementRef;

  @ViewChild('myNav')
  nav: ElementRef;

  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
  }

  handleEnter($event) {
    const { target } = $event;
    console.log(target);

    this.renderer.setElementClass(target, 'trigger-enter', true);
    setTimeout(() =>
        target.classList.contains('trigger-enter') &&
        this.renderer.setElementClass(target, 'trigger-enter-active', true)
    , 150);

    // show white background of div dropdown
    this.renderer.setElementClass(this.background.nativeElement, 'open', true);

    // get the dropdown enclosed by the current target
    const dropdown = target.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = this.nav.nativeElement.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top:  dropdownCoords.top - navCoords.top,
      left:  dropdownCoords.left - navCoords.left
    }

    console.log(dropdownCoords.top, dropdownCoords.left);
    console.log(navCoords.top, navCoords.left);
    console.log(coords.top, coords.left);

    this.renderer.setElementStyle(this.background.nativeElement, 'width', `${coords.width}px`);
    this.renderer.setElementStyle(this.background.nativeElement, 'height', `${coords.height}px`);
    this.renderer.setElementStyle(this.background.nativeElement, 'transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  handleLeave($event) {
    const { target } = $event;
    console.log(target);
    // The context of this should be li
    this.renderer.setElementClass(target, 'trigger-enter', false);
    this.renderer.setElementClass(target, 'trigger-enter-active', false);

    // show white background of div dropdown
    this.renderer.setElementClass(this.background.nativeElement, 'open', false);
  }

  // const triggers = document.querySelectorAll('.cool > li');
  // const background = document.querySelector('.dropdownBackground');
  // const nav = document.querySelector('nav');
  //
  // function handleEnter() {
  //   this.classList.add('trigger-enter');
  //   setTimeout(() =>
  //     this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')
  //   , 150);
  //
  //   // show white background of div dropdown
  //   background.classList.add('open');
  //
  //   const dropdown = this.querySelector('.dropdown');
  //   const dropdownCoords = dropdown.getBoundingClientRect();
  //   const navCoords = nav.getBoundingClientRect();
  //
  //   const coords = {
  //     height: dropdownCoords.height,
  //     width: dropdownCoords.width,
  //     top:  dropdownCoords.top - navCoords.top,
  //     left:  dropdownCoords.left - navCoords.left
  //   }
  //
  //   background.style.setProperty('width', `${coords.width}px`);
  //   background.style.setProperty('height', `${coords.height}px`);
  //   background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  // }
  //
  // function handleLeave() {
  //   this.classList.remove('trigger-enter', 'trigger-enter-active');
  //
  //   // show white background of div dropdown
  //   background.classList.remove('open');
  // }
  //
  // triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  // triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


}
