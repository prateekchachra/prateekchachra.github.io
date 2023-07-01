import { HiHome, HiUser, HiRectangleGroup, HiViewColumns, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];


const Nav = () => {

  const router = useRouter();
  const { pathname } = router;
  return <nav>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80
    xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {links.map((link, index) => {
        return <Link href={link.path}>{link.icon}</Link>
      })}
    </div>
  </nav>;
};

export default Nav;
