import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center my-10">
      <img src={logo} alt="A canvas" className="h-44 w-44 mb-8"/>
      <h1 className="font-title text-xl md:text-4xl font-bold tracking-widest text-center uppercase text-amber-800 md:">React Art</h1>
      <p className="font-titless text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
