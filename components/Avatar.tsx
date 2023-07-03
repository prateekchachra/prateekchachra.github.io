import Image from "next/image";

const Avatar = () => (<div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar.png'} width={737} height={678} alt='' 
    className="translate-z-0 w-full h-full object-cover" />
  </div>);

export default Avatar;
