import Image from 'next/image';
import { useState } from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuest, setNumberOfGuest] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuest,
            }
        });
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="/images/logo.png" layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            {/* middle */}
            <div className="flex items-center border-2 rounded-full py-2 px-3 md:shadow-sm">

                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder={ placeholder || "Start your search" }
                    className="bg-transparent flex-grow outline-none text-sm text-gray-500 placeholder-gray-400" />

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

            {/* Date picker */}
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto bg-white rounded-lg mt-2">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="pl-2 flex-grow">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={numberOfGuest}
                            onChange={(e) => setNumberOfGuest(e.target.value)}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-md outline-none text-red-400" />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-1 text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-1 text-red-400">Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
