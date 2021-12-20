import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    
    
  },
  {
  _tag: 'CSidebarNavDropdown',
  name: 'Invoices',
  
 
  _children: [
   
    {
      _tag: 'CSidebarNavItem',
      name: 'Normal',
      to: '/invoices/normal/Invoice',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'RFEJ',
      to: '/invoices/rfej/InvoiceRfej',
    }
    
  ],
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Daily Expenses',
    to: '/expenses/Expenses',
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Salaries',
    to: '/salaries/Salaries',
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/reports/Reports',
    
  }
]

export default _nav
