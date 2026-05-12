interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function FormField({ label, id, type = 'text', placeholder, required, className = '' }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
        {label}{required && <span className="text-brand-green ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  id: string;
  options: string[];
  required?: boolean;
  className?: string;
}

export function SelectField({ label, id, options, required, className = '' }: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
        {label}{required && <span className="text-brand-green ml-1">*</span>}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors"
      >
        <option value="">Selecciona una opción</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export function TextareaField({ label, id, placeholder, rows = 3, className = '' }: TextareaFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-border rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-dark focus:bg-white transition-colors resize-none"
      />
    </div>
  );
}
