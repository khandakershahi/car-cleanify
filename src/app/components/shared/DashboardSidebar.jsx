import Link from 'next/link';
import React from 'react';
import logo from '@/assets/img/logo.png'
import Image from 'next/image';
const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-gray-300 text-accent-content h-screen px-3 py-4 fixed top-0 left-0'>
            <Link href={'/'}>
                <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
            <div className='flex flex-col gap-2 mt-7 px-3'>
                <Link href={'/dashboard/profile'}>My Profile</Link>
                <Link href={'/dashboard/bookings'}>My Bookings</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;