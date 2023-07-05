import Link from "next/link";
import { useRouter } from 'next/router'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,

} from "react-icons/ri";

const Socials = () => {
  
  const router = useRouter();
  const {locale} = router;
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link
      target="_blank"
      href="https://www.youtube.com/channel/UCP0CaJFUN2eqP9oJZ92Xmew"
      className="hover:text-accent transition-all duration-300"
    >
      <RiYoutubeLine />
    </Link>
    <Link
      target="_blank"
      href="https://www.instagram.com/prattchach/"
      className="hover:text-accent transition-all duration-300"
    >
      <RiInstagramLine />
    </Link>
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/prateek-chachra-3a2030a7/"
      className="hover:text-accent transition-all duration-300"
    >
      <RiLinkedinLine />
    </Link>
    <Link
      target="_blank"
      href="https://github.com/prateekchachra"
      className="hover:text-accent transition-all duration-300"
    >
      <RiGithubLine />
    </Link>
    <Link
      href={locale === 'es' ? '/en' : '/es'}
      className="hover:text-accent transition-all duration-300"
    >
      {locale === 'es' ? '🇬🇧EN' : '🇪🇸ES'}
    </Link>
  </div>
);}
export default Socials;
