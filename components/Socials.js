

import Link from 'next/link';
import { RiYoutubeLine, RiInstagramLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

const Socials = () => {
  return <div>
    <Link href='https://www.youtube.com/channel/UCP0CaJFUN2eqP9oJZ92Xmew' className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href='https://www.instagram.com/prattchach/' className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href='https://www.linkedin.com/in/prateek-chachra-3a2030a7/' className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href='https://github.com/prateekchachra' className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
  </div>;
};

export default Socials;
