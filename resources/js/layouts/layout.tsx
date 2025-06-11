export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="h-full py-2 bg-blue-400 shadow-md">
                    <div className="flex items-center px-4 py-2 gap-x-6 text-white text-xl font-bold">
                        <div className="hover:text-blue-200"><a href="/">Yuukisan</a></div>
                        <ul className="flex gap-x-6 font-normal">
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
                        </ul>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
