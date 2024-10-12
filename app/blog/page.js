import BlogPost from './blog-post'
import { reqUrl } from '../config';

const Blog = async () => {
     const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title`);
     const blogPosts = await req.json();

    
return (
    <div className='container mx-auto p-8'>
        <section>
            <h1 className='text-4xl bold text-center font-bold mb-8'>Blog</h1>

            <div className='max-w-2xl mx-auto'>
                {blogPosts.map(post => (
                    <BlogPost
                      key={blogPosts.id}
                     title={post.title.rendered}
                     author={post.author}
                     slug={post.slug}
                     className="mb-4"
                     />
                ))}
            </div>
        </section>
    </div>
);
}

export default Blog;