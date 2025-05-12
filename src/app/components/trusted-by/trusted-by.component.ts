import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-trusted-by',
  templateUrl: './trusted-by.component.html',
  styleUrls: ['./trusted-by.component.css']
})
export class TrustedByComponent implements AfterViewInit, OnDestroy {

  private mutationObserver: MutationObserver | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSlick();

      this.mutationObserver = new MutationObserver(() => {
        this.reinitializeSlick();
      });

      const targetNode = document.documentElement;
      this.mutationObserver.observe(targetNode, {
        attributes: true,
        attributeFilter: ['dir']
      });
    }
  }

  initializeSlick(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

      if (!$('.customer-logos').hasClass('slick-initialized')) {
        $('.customer-logos').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          dots: false,
          rtl: isRtl,
          pauseOnHover: false,
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } }
          ]
        });
      }
    }
  }

  reinitializeSlick(): void {
    if (isPlatformBrowser(this.platformId)) {
      if ($('.customer-logos').hasClass('slick-initialized')) {
        $('.customer-logos').slick('unslick');
      }
      this.initializeSlick();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if ($('.customer-logos').hasClass('slick-initialized')) {
        $('.customer-logos').slick('unslick');
      }
    }
  }
}
