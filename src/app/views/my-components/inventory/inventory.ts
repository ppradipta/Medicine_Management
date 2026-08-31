import { Component } from '@angular/core';
import { BreadCrumb } from '../bread-crumb/bread-crumb';

@Component({
  selector: 'app-inventory',
  imports: [BreadCrumb],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss'
})
export class Inventory {
  readonly summaryCards = [
    { label: 'Total stock', value: '2,480', note: 'Across 84 medicines', icon: '▦', tone: 'total' },
    { label: 'Available stock', value: '2,186', note: 'Ready to dispense', icon: '✓', tone: 'available' },
    { label: 'Low stock', value: '12', note: 'Need reordering soon', icon: '!', tone: 'low' },
    { label: 'Expired stock', value: '08', note: 'Require action today', icon: '×', tone: 'expired' },
  ];

  readonly medicines = [
    { name: 'Paracetamol 500mg', batch: 'Batch #PCM-4821', initial: 'P', available: 420, reserved: 36, expired: 0, status: 'Healthy', statusClass: 'healthy', tone: 'blue' },
    { name: 'Amoxicillin 250mg', batch: 'Batch #AMX-1938', initial: 'A', available: 32, reserved: 8, expired: 0, status: 'Low stock', statusClass: 'low', tone: 'orange' },
    { name: 'Vitamin C Tablets', batch: 'Batch #VCT-7452', initial: 'V', available: 184, reserved: 16, expired: 0, status: 'Healthy', statusClass: 'healthy', tone: 'purple' },
    { name: 'Cetirizine 10mg', batch: 'Batch #CTZ-2690', initial: 'C', available: 76, reserved: 10, expired: 14, status: 'Expired', statusClass: 'expired', tone: 'red' },
  ];
}
