import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent {
  isFormOpen = false;
  contactForm: FormGroup;
  isMenuOpen = false;
  iconList = ['bi-whatsapp', 'bi-telephone-fill', 'bi-envelope-fill'];
  currentIconIndex = 0;
  currentIcon = this.iconList[0];
  intervalId: any;

  constructor(
    private contactService: ContentService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ){
    this.contactForm=this.fb.group({
      name: ['', Validators.required],
        email: ['', Validators.required],
        company: ['', Validators.required],
        message: ['', Validators.required],
     })
  }
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIconIndex = (this.currentIconIndex + 1) % this.iconList.length;
      this.currentIcon = this.iconList[this.currentIconIndex];
    }, 2000);
  }
  onSubmit(): void {
    const formData = new FormData();
    
    Object.keys(this.contactForm.controls).forEach(key => {
      formData.append(key, this.contactForm.get(key)?.value);
    });
    
    this.contactService.addContacts(formData).subscribe({
      next: () => {
        Swal.fire({
          title: 'تم الإرسال!',
          text: 'تم إرسال رسالتك بنجاح!',
          icon: 'success',
          confirmButtonText: 'حسنًا'
        }).then(() => {
          this.contactForm.reset(); 
        });
      },
      error: (error) => {
        Swal.fire({
          title: 'خطأ',
          text: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
          icon: 'error',
          confirmButtonText: 'حسنًا'
        });
        console.error('Error adding subject:', error);
      }
    });
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isFormOpen = false;
  }
  
  openWhatsApp() {
    const phoneNumber = '201070714795'; 
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
    this.isMenuOpen = false;
  }
  
  openContactForm() {
    this.isFormOpen = true;
    this.isMenuOpen = false;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
