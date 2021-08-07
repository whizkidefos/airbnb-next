import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="/images/logo.png" layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            {/* moddle */}
            <div className="flex items-center border-2 rounded-full py-2 px-3 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="bg-transparent flex-grow outline-none text-sm text-gray-500 placeholder-gray-400" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
            </div>

            {/* right */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header;
