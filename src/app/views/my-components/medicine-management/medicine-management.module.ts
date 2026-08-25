import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MEDICINE_MANAGEMENT_ROUTES } from './medicine-management.route'

@NgModule({
  imports: [RouterModule.forChild(MEDICINE_MANAGEMENT_ROUTES)],
})
export class MedicineManagementModule {}
