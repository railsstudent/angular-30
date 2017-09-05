import { Component, Renderer, OnInit, HostListener } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Scoped CSS Variables and JS';
  
  baseColor: string;
  blur: string;
  spacing: string; 
    
  constructor(private titleService: Title, private santizer: DomSanitizer) {
      titleService.setTitle(this.title);      
  }
  
  ngOnInit() {
      this.baseColor = '#ffc600';
  }
  
  changeProperty($event) {  
    const [name, value] = [$event.target.name, $event.target.value];
    console.log(name,value);
    
    if (name === 'spacing') {
      this.spacing = value;
    } else if (name === 'blur') {
      this.blur = value;
    } else {
        this.baseColor = value;
    }
  }
  
  getSpacingStyle() {
    return `${this.spacing}px`;
  }
  
  getBlurStyle() {
    return this.santizer.bypassSecurityTrustStyle(`blur(${this.blur}px)`);
  }
  
  getColorStyle() {
    return this.baseColor;
  }
}
