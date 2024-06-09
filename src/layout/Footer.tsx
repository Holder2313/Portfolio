// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" dark:bg-primary-foreground py-2 ">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Sébastien Perrot</p>
        <Link
          href="/legal"
          className="hover:underline "
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
