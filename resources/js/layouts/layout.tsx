export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="bg-blue-600 shadow-md p-4">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="text-xl font-bold text-black">Yuuklsan</div>
                        <ul className="flex space-x-4">
                            <li>
                                {' '}
                                <a href="/" className="text-black hover:text-blue-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-black hover:text-blue-200">
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
