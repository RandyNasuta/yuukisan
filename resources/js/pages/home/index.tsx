import Layout from '@/layouts/layout';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';


interface Props {
    id: number;
}

interface Anime {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    title_english: string;
    title_japanese: string;
    synopsis: string;
}


interface Data {
    mal_id: number;
    url: string;
    images: Images;
    title_english: string;
    title_japanese: string;
    synopsis: string;
}

interface Images {
    jpg: Jpg;
}

interface Jpg {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

export default function Index({id}: Props) {
    const [anime, setAnime] = useState<Anime | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://api.jikan.moe/v4/anime/${id}`)
            .then((res) => {
                setAnime(res.data.data);
            })
            .catch((err) => {
                console.error('Gagal fetch anime:', err);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!anime) return <p>Anime tidak ditemukan.</p>;

    return (
        <div className="flex h-screen">
            <div className="flex-1"></div>
            <div className="flex-[2]">
                <div className="m-5 w-auto rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <a href={anime.url ?? '#'} className="block h-100 w-full">
                        <img className="h-full w-full rounded-t-lg object-cover" src={anime.images.jpg.large_image_url ?? '/images/cover/cover_example.png'} alt="Cover Post" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {anime.title_japanese} ({anime.title_english})
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">
                            {anime.synopsis}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    );
}

Index.layout = (page: ReactElement) => <Layout title="Home">{page} </Layout>;
