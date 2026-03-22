import { motion } from 'motion/react';
import { ChevronLeft, Plus, Settings, X } from 'lucide-react';
import { Address } from '@/App';

interface AddressManagementProps {
  onBack: () => void;
  onAdd: () => void;
  onEdit: (addr: Address) => void;
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
}

export function AddressManagement({ onBack, onAdd, onEdit, addresses, setAddresses }: AddressManagementProps) {
  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] pt-12 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-[#2D463E] hover:bg-black/5 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-3xl font-serif text-[#2D463E]">地址管理</h2>
        </div>

        <div className="space-y-6">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-bold text-[#2D463E]">{addr.name}</span>
                  <span className="text-sm text-black/40">{addr.phone}</span>
                  {addr.isDefault && (
                    <span className="bg-black/5 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider text-black/40">默认</span>
                  )}
                </div>
                <p className="text-sm text-black/40 leading-relaxed">{addr.address}</p>
              </div>
              <div className="flex gap-4 text-black/20">
                <button onClick={() => onEdit(addr)} className="hover:text-[#2D463E] transition-colors"><Settings size={20} /></button>
                <button onClick={() => handleDelete(addr.id)} className="hover:text-rose-500 transition-colors"><X size={20} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-12 left-0 right-0 z-40 flex justify-center px-6 pointer-events-none">
          <button 
            onClick={onAdd}
            className="w-full max-w-2xl bg-[#2D463E] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-black/10 flex items-center justify-center gap-3 hover:bg-[#243831] transition-all active:scale-[0.98] pointer-events-auto"
          >
            <Plus size={24} />
            添加新地址
          </button>
        </div>
      </div>
    </div>
  );
}
