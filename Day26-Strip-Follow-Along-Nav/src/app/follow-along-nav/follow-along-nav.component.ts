import { Component, OnInit, ViewChild, QueryList, ElementRef, Renderer } from '@angular/core';
import { Course, SocialMedia } from '../shared/model';

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

  courses: Course[];
  socialAccounts: SocialMedia[];

  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
    this.courses = [{
      code: 'RFB',
      link: 'https://ReactForBeginners.com',
      description: 'React For Beginners'
    },
    {
      code: 'ES6',
      link: 'https://ES6.io',
      description: 'ES6 For Everyone'
    },
    {
      code: 'STPU',
      link: 'https://SublimeTextBook.com',
      description: 'Sublime Text Power User'
    },
    {
      code: 'WTF',
      link: 'http://flexbox.io',
      description: 'What The Flexbox?!'
    },
    {
      code: 'LRX',
      link: 'http://LearnRedux.com',
      description: 'Learn Redux'
    },
    {
      code: 'CLPU',
      link: 'http://CommandLinePowerUser.com',
      description: 'Command Line Power User'
    },
    {
      code: 'MMD',
      link: 'http://MasteringMarkdown.com',
      description: 'Mastering Markdown'
    }];

    this.socialAccounts = [{
      link: 'http://twitter.com/wesbos',
      description:  'Twitter'
    },
    {
      link: 'http://facebook.com/wesbos.developer',
      description:  'Facebook'
    },
    {
      link: 'http://wesbos.com',
      description:  'Blog'
    },
    {
      link: 'http://wesbos.com/courses',
      description:  'Course Catalog'
    }]
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
    this.renderer.setElementClass(target, 'trigger-enter', false);
    this.renderer.setElementClass(target, 'trigger-enter-active', false);

    // show white background of div dropdown
   this.renderer.setElementClass(this.background.nativeElement, 'open', false);
  }
}
