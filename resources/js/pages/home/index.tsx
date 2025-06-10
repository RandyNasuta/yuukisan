import Layout from "@/layouts/layout";

function Index({ name }) {
    return (
        <h1>Hello world</h1>
    );
}

Index.layout = page => <Layout children={page} />

export default Index
