import { Component, OnDestroy, AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent'
import { WindowService } from '../shared/window.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements AfterViewInit, OnDestroy {

  subscription: any;
  nativeWindow: any;

  constructor(private elRef: ElementRef, private renderer: Renderer,
    private windowService: WindowService) { }

  ngAfterViewInit() {
    const sliderImages = this.elRef.nativeElement.querySelectorAll('.slide-in');
    this.nativeWindow = this.windowService.nativeWindow();

    // listen to scroll event of window
    // receive event and return the same event
    // wait 20 milliseconds before sending out data
    this.subscription = Observable
                        .fromEvent(this.nativeWindow, 'scroll')
                        .debounceTime(20)
                        .subscribe(() => {
                          sliderImages.forEach(this.handleSlideImage.bind(this));
                        });
  }

  handleSlideImage(sliderImage: any) {
    // half way through the image
    const slideInAt = (this.nativeWindow.scrollY + this.nativeWindow.innerHeight) - sliderImage.height / 2;
    console.log({slideInAt: slideInAt});
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    console.log({offsetTop: sliderImage.offsetTop, imageBottom: imageBottom});
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = this.nativeWindow.scrollY < imageBottom;
    this.renderer.setElementClass(sliderImage, 'active', isHalfShown && isNotScrolledPast);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
