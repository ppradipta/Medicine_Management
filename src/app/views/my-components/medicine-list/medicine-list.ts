import { Component } from '@angular/core'
import { UiCard } from '@app/components/ui-card'
import { NgIcon } from '@ng-icons/core'
import { paginationIcons, tableData } from '@/app/views/tables/datatables/data'
import { currency } from '@/app/constants'
import { DataTablesModule } from 'angular-datatables'
import { PageTitle } from '@app/components/page-title/page-title'
import { BreadCrumb } from '../bread-crumb/bread-crumb'

@Component({
  selector: 'app-medicine-list',
  imports: [UiCard, NgIcon, DataTablesModule, PageTitle,BreadCrumb],
  templateUrl: './medicine-list.html',
  styleUrl: './medicine-list.scss'
})
export class MedicineList {

  basicData = tableData
  currency = currency
  dtOptions = {
    responsive: true,
    dom:
      "<'d-md-flex justify-content-between align-items-center mt-2 mb-3'<'columnToggleWrapper'B>f>" +
      'rt' +
      "<'d-md-flex justify-content-between align-items-center mt-2'lp>",
    buttons: [
      { extend: 'copy', className: 'btn btn-sm btn-secondary' },
      { extend: 'csv', className: 'btn btn-sm btn-secondary active' },
      { extend: 'excel', className: 'btn btn-sm btn-secondary' },
      { extend: 'print', className: 'btn btn-sm btn-secondary active' },
      { extend: 'pdf', className: 'btn btn-sm btn-secondary' },
    ],
    language: {
      paginate: paginationIcons,
    },
  }
  
}
