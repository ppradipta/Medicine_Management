import { Route } from '@angular/router'

export const MEDICINE_LIST_ROUTES: Route[] = [

  {
    path: 'medicine-list', 
    loadComponent: () =>
      import('./medicine-list').then((m) => m.MedicineList),
    data: { title: 'Medicine List' },
  },  
  {
    path: 'medicine-list/medicine-create', 
    loadComponent: () =>
      import('./create-medicine/create-medicine').then((m) => m.CreateMedicine),
    data: { title: 'Create Medicine' },
  },

   

]
