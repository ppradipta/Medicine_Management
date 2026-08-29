import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MEDICINE_LIST_ROUTES } from './medicine-list.route'

@NgModule({
  imports: [RouterModule.forChild(MEDICINE_LIST_ROUTES)],
})
export class MedicineListModule {}
