import { MenuItemType } from '@/app/types/layout'

type UserDropdownItemType = {
  label?: string
  icon?: string
  url?: string
  isDivider?: boolean
  isHeader?: boolean
  class?: string
}

export const userDropdownItems: UserDropdownItemType[] = [
  {
    label: 'Welcome back!',
    isHeader: true,
  },
  {
    label: 'Profile',
    icon: 'tablerUserCircle',
    url: 'pages-profile.html',
  },
  {
    label: 'Notifications',
    icon: 'tablerBellRinging',
    url: '#',
  },
  {
    label: 'Balance: $985.25',
    icon: 'tablerCreditCard',
    url: '#',
  },
  {
    label: 'Account Settings',
    icon: 'tablerSettings2',
    url: '#',
  },
  {
    label: 'Support Center',
    icon: 'tablerHeadset',
    url: '#',
  },
  {
    isDivider: true,
  },
  {
    label: 'Lock Screen',
    icon: 'tablerLock',
    url: 'auth-lock-screen.html',
  },
  {
    label: 'Log Out',
    icon: 'tablerLogout2',
    url: '/auth/sign-in',
    class: 'fw-semibold',
  },
]

export const menuItems: MenuItemType[] = [
  { label: 'Dashboard', icon: 'lucideCircleGauge', url: '/dashboard' },
  { label: 'Medicine', icon: 'lucideCalendar', url: '/' },
  { label: 'Inventory', icon: 'lucideCalendar', url: '/' },
  { label: 'Supplier', icon: 'lucideCalendar', url: '/' },
  { label: 'Purchase', icon: 'lucideCircleGauge', url: '/' },
  { label: 'Sales & Billing', icon: 'lucideCircleGauge', url: '/' },
  { label: 'Prescription', icon: 'lucideCircleGauge', url: '/' },
  { label: 'Customer', icon: 'lucideCircleGauge', url: '/' },
  { label: 'Reports & Analytics', icon: 'lucideCircleGauge', url: '/' },
]
