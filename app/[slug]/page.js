import { reqUrl } from "../config";

const Page = async ({ params }) => {
    const req = await fetch(`${reqUrl}/pages?_fields=id,slug,title,content&slug=${params.slug}`);
    const pages = await req.json();
    const page = pages[0];

    return (
    <div className="container mx-auto p-8 pb-16">
        <section>
            <h1 className="text-4xl bold text-center font-bold mb-8">{page.title.rendered}</h1>
            <div className="prose prose-slate mx-w-2xl" dangerouslySetInnerHTML={{__html: page.content.rendered}}>
            </div>
        </section>
    </div>
    )
};

export default Page;