import React from 'react'
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({children} : DashboardLayoutProps ) => {
  return (
    <div className='flex min-h-screen'>
        <DashboardSidebar></DashboardSidebar>
        <div className='flex-1'>{children}</div>
        </div>
  )
}

export default DashboardLayout