import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  subtitle: string;
  metaDesc: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, subtitle, metaDesc, updated, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title} | REDUCE</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="bg-brand-dark py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-6 block">Legal</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight mb-4">{title}</h1>
          <p className="text-white/45 text-base">{subtitle}</p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-6 pt-14 pb-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-muted border-b border-border pb-6 mb-10">
            Última actualización: <span className="font-semibold text-brand-dark">{updated}</span>
          </p>
          <div className="space-y-10 text-sm text-muted leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-black text-brand-dark tracking-tight mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead className="bg-brand-light">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-black text-brand-dark tracking-tight">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
