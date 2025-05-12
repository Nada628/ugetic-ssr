import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-jop',
  templateUrl: './apply-jop.component.html',
  styleUrls: ['./apply-jop.component.css']
})
export class ApplyJopComponent {
contactForm: FormGroup;

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

}
