 import Image from 'next/image';
 import Button from './button';
 import Link from 'next/link'


 const Card = ({title, subtitle,thumbnail, btnLabel, href}) => (
  <div className='text-center'>
    <Link href={href}>
      <Image 
      className='block mx-auto mb-4'
      layout='responsive'
      width="600"
      height="400"
      src={thumbnail}
      alt='card thumbnail image'
      />
    </Link>
    <div className='font-semibold text-center text-xl mb-1'>{title}</div>
      <div className='text-md text-center mb-4'>{subtitle}</div>
      <Button href={href}>{btnLabel}</Button>
    </div>
 );

 export default Card;