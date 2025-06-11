export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="h-full bg-red-700 py-2 shadow-md">
                    <div className="flex items-center gap-x-6 px-4 py-2 font-bold text-white">
                        {/* Title dan icon website */}
                        <div className="text-xl hover:text-blue-200">
                            <a href="/">Yuukisan</a>
                        </div>

                        {/* List menu */}
                        <div className="w-full">
                            <ul className="flex gap-x-6 justify-center text-base font-normal">
                                <li>
                                    {' '}
                                    <a href="/" className="hover:text-blue-200">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-blue-200">
                                        Trending
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-blue-200">
                                        Seasonal Anime
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-blue-200">
                                        Anime Ranking
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Profile and search */}
                        <div className="ml-auto flex w-7xl justify-end gap-x-6">
                            <div className="w-1/2">
                                <form className="mx-auto flex max-w-sm items-center">
                                    <label htmlFor="simple-search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            id="simple-search"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            placeholder="Cari kabar anime"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="ms-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                            </div>
                            <button className="rounded-full border px-5 text-base hover:bg-cyan-600">Register</button>
                            <button className="rounded-full bg-cyan-500 px-5 text-base hover:bg-cyan-600">Login</button>
                        </div>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
