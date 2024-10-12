 import Link from 'next/link';

 const Navigation = () => (
    <nav className='flex justify-center gap-8 mb-5'>
        <Link href="/products" className='font-semibold text-teal-800'>Products</Link>
        <Link href="/blog" className='font-semibold text-teal-800'>Blog</Link>
        <Link href="/about" className='font-semibold text-teal-800'>About</Link>
        <Link href="/contact" className='font-semibold text-teal-800'>Contact</Link>
    </nav>
 )

 export default Navigation;