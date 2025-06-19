import Layout from '@/layouts/layout';
import { ReactElement } from 'react';

export default function Index() {
    return <h1 className="title">Hello World</h1>;
}

Index.layout = (page: ReactElement) => <Layout title='Home'>{page} </Layout>;
