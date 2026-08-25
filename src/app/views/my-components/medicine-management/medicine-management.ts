import { Component , inject, OnInit } from '@angular/core';
import { UiCard } from '@app/components/ui-card';
import { NgIcon } from '@ng-icons/core'
import { BreadCrumb } from '../bread-crumb/bread-crumb';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'


@Component({
  selector: 'app-medicine-management',
  imports: [UiCard, NgIcon,BreadCrumb,FormsModule,ReactiveFormsModule],
  templateUrl: './medicine-management.html',
  styleUrl: './medicine-management.scss'
})
export class MedicineManagement implements OnInit {

  public formBuilder = inject(UntypedFormBuilder)
  validationform!: UntypedFormGroup
  submit!: boolean

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      medicineName: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      genericName: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      categoryName: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      brandName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      batchNumber: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      mfgDate: ['', [Validators.required]],
      barcode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-]+')]],
      medicineImage: [null, [Validators.required]],
      expDate: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      purchasePrice: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      sellingPrice: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    })
  }

  get form() {
    return this.validationform.controls
  }

  validSubmit() {
    this.submit = true
  }

  onImageSelected(event: Event) {
    const image = (event.target as HTMLInputElement).files?.[0] ?? null
    this.validationform.patchValue({ medicineImage: image })
    this.form['medicineImage'].markAsTouched()
  }

  cancelImageUpload(imageInput: HTMLInputElement) {
    imageInput.value = ''
    this.validationform.patchValue({ medicineImage: null })
    this.form['medicineImage'].markAsUntouched()
  }
  

}

