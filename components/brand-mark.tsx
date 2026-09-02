export function BrandMark({ href = "/" }: { href?: string }) {
  return (
    <a className="brand-mark" href={href} aria-label="Roee Bibas, home">
      <span className="brand-monogram" aria-hidden="true">
        <span>R</span>
        <i />
        <span>B</span>
      </span>
      <span className="brand-name">Roee Bibas</span>
    </a>
  );
}
