import Link from "next/link";

export default function Header() {
  return (
    <div className="md:grid grid-cols-3 mb-20 mt-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="hover:underline">R-KA</a>
          </Link>
          .
        </h2>
      </div>
      <div className="md:col-span-1">
        {/* list page */}
        <ul className="md:flex flex-row justify-between">
          <li>about</li>
          <li>cv</li>
          <li>apagitu</li>
        </ul>
      </div>
    </div>
  );
}
