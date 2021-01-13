import facebook from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import instagram from '../assets/icon-instagram.svg';
import youtube from '../assets/icon-youtube.svg';

interface SocialIconProps {
  name: 'facebook' | 'twitter' | 'instagram' | 'youtube';
}

export default function SocialIcon({ name }: SocialIconProps) {
  const images = {
    facebook,
    twitter,
    instagram,
    youtube,
  };

  return <img src={images[name]} alt={`${name} icon`} />;
}
