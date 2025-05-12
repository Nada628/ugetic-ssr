import { Component, Input } from '@angular/core';

interface FeatureItem {
  icon?: string;
  iconColor?: string;
  headerKey: string;  
  descKey?: string;   
}


@Component({
  selector: 'app-featureTwoThree',
  templateUrl: './featureTwoThree.component.html',
  styleUrls: ['./featureTwoThree.component.css']
})
export class FeatureTwoThreeComponent {
  @Input() featureTwoHeaderKey: string = '';
  @Input() featureTwoDescKey: string = ''; 
  @Input() featureTwoItems: FeatureItem[] = []; 
  @Input() featureTwoImageUrl: string = ''; 

  @Input() featureThreeHeaderKey: string = '';  
  @Input() featureThreeDescKey: string = ''; 
  @Input() featureThreeItems: FeatureItem[] = []; 
  @Input() featureThreeImageUrl: string = ''; 
  }
