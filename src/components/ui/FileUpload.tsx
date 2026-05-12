import { Upload } from 'lucide-react';

interface FileUploadProps {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  className?: string;
}

export function FileUpload({ label, hint = 'PDF, Excel, CSV', accept, multiple, className = '' }: FileUploadProps) {
  return (
    <div className={className}>
      {label && <p className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</p>}
      <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-brand-green/50 hover:bg-slate-50 transition-colors group">
        <Upload className="w-6 h-6 text-slate-400 group-hover:text-brand-green transition-colors mb-3" />
        <p className="text-sm font-semibold text-slate-500 group-hover:text-slate-700 transition-colors text-center">
          Arrastra archivos aquí o haz clic para seleccionar
        </p>
        <p className="text-xs text-slate-400 mt-1">{hint}</p>
        <input type="file" className="hidden" accept={accept} multiple={multiple} />
      </label>
    </div>
  );
}
