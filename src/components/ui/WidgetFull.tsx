import * as React from 'react';
import { ReactNode } from 'react'; 
import { ArrowLeft } from 'lucide-react';

interface WidgetFullProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const WidgetFull = ({ title, isOpen, onClose, children }: WidgetFullProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 animate-in fade-in duration-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b">
        <div className="h-16 px-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
            {title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="pt-16 h-full overflow-auto">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default WidgetFull;