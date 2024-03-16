import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  const linkClass =
    'transition ease-in-out font-bold hover:text-highlight cursor-pointer text-text-secondary text-sm';
  const iconClass =
    'text-text-secondary hover:text-highlight hover:animate-pulse';

  return (
    <footer className="flex h-14 flex-row items-center justify-between bg-surface-primary p-2">
      <div className="flex flex-row items-center justify-between gap-10 px-2">
        <p className="text-sm font-bold text-text-secondary">
          © 2024 Project Kardeshev
        </p>
        <Link
          to="/terms"
          className="cursor-pointer text-sm font-bold text-text-secondary transition ease-in-out hover:text-highlight"
        >
          Terms
        </Link>
        <Link
          to="/privacy"
          className="cursor-pointer text-sm font-bold text-text-secondary transition ease-in-out hover:text-highlight"
        >
          Privacy
        </Link>
      </div>

      <div className="flex flex-row items-center justify-between gap-10 px-2">
        <Link to="/discord" className={linkClass}>
          <FaDiscord size={25} className={iconClass} />
        </Link>
        <Link to="/twitter" className={linkClass}>
          <FaXTwitter size={25} className={iconClass} />
        </Link>
        <Link to="/github" className={linkClass}>
          <FaGithub size={25} className={iconClass} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
