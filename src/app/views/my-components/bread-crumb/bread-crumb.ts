import { Component } from '@angular/core';
import { UiCard } from '@app/components/ui-card';
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-bread-crumb',
  imports: [UiCard, NgIcon],
  templateUrl: './bread-crumb.html',
  styleUrl: './bread-crumb.scss'
})
export class BreadCrumb {

}
