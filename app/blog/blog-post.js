import Link from "next/link"

const BlogPost = ({title, author, slug, className}) => (
    <div className={className}>
    <Link href={`/blog/${slug}`} class="text-lg text-teal-800 font-semibold mb-4">{title}</Link>
     <p className='text-md'>{author}</p>
    </div>
)

export default BlogPost
  