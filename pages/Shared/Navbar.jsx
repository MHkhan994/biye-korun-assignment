import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='my-container bg-nav h-[91px] flex items-center px-[20px] justify-between'>
            <div>
                <Image
                src={'/logo.svg'}
                alt='biye korun logo'
                width={173}
                height={44}
                />
            </div>
            <div className='flex gap-[15px]'>
                <div className='h-[50px] w-[50px] rounded-full bg-white flex justify-center items-center'>
                    <Image
                    src={'/notification-logo.svg'}
                    alt='nav notification logo'
                    width={24}
                    height={24}
                    />
                </div>
                <div className='h-[50px] w-[50px] rounded-full bg-white'>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;