import { Route } from '@angular/router'

export const MEDICINE_MANAGEMENT_ROUTES: Route[] = [
  {
    path: 'medicine-management',
    loadComponent: () =>
      import('./medicine-management').then((m) => m.MedicineManagement),
    data: { title: 'Medicine Management' },
  }

]
