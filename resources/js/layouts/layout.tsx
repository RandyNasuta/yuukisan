import { Head } from '@inertiajs/react';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title = 'Yuukisan' }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            <Head title={title} />
            <header>
                <div>
                    <nav className="border-gray-200 bg-blue-950 dark:bg-gray-900">
                        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/images/icon/icon.png" className="h-8" alt="Yuukisan Icon" />
                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yuukisan</span> */}
                            </a>
                            <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                                <button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    type="button"
                                    className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="/images/sakamoto.jpg" alt="user photo" />
                                </button>

                                {isOpen && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute top-full left-1/2 z-50 mt-2 w-48 -translate-x-1/2 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-sm dark:divide-gray-600 dark:bg-gray-700"
                                        id="user-dropdown"
                                    >
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                            <span className="block truncate text-sm text-gray-500 dark:text-gray-400">name@flowbite.com</span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                <button
                                    data-collapse-toggle="navbar-user"
                                    type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-user"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h15M1 7h15M1 13h15"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-user">
                                <ul className="mt-4 flex flex-col p-4 font-medium text-white md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
                                    <li>
                                        <a href="/about" className="px-3 py-2 text-white md:p-0 hover:text-blue-500" aria-current="page">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 text-white md:p-0 hover:text-blue-500">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 text-white md:p-0 hover:text-blue-500">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 text-white md:p-0 hover:text-blue-500">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="px-3 py-2 text-white md:p-0 hover:text-blue-500">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="min-h-screen w-full bg-gray-500">{children}</main>
        </>
    );
}
