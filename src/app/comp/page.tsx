import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CompPage: FC = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 right-2 p-4 mt-[-210px]">
                <Link href="/">
                    <Image 
                        src="/logo2.svg"
                        alt="The Crimson Logo"
                        width={300}
                        height={300}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>
            <div className="flex justify-center p-4 overflow-auto">
                <div className="w-full md:w-3/4 lg:w-1/2 text-center">
                    <p className="text-xl md:text-2xl mb-8">
                        <strong>Comper Portal: Coming soon...</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CompPage;