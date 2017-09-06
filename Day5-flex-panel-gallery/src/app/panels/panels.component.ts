import { 
  Component, 
  ViewChildren, 
  QueryList, 
  ElementRef, 
  AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements AfterViewInit {

  @ViewChildren('mypanel')
  panels: QueryList<ElementRef>;
    
  ngAfterViewInit() {
    console.log(this.panels);
    this.panels.forEach(panel => panel.nativeElement.addEventListener('click', 
      function toggleOpen() {
          this.classList.toggle('open');
      }.bind(panel.nativeElement)) ); 
         
    this.panels.forEach(panel => panel.nativeElement.addEventListener('transitionend', 
      function toggleActive(ev) {
          const [propertyName='', classList=null] = [ev.propertyName, ev.target.classList];
          if (propertyName.includes('flex')) {
              classList.toggle('open-active');
          }
      }.bind(panel.nativeElement)) ); 
  }
}
