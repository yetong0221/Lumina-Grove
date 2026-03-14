import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Address } from '@/App';

interface AddAddressProps {
  onBack: () => void;
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
  editingAddress: Address | null;
}

export function AddAddress({ onBack, addresses, setAddresses, editingAddress }: AddAddressProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    if (editingAddress) {
      setName(editingAddress.name);
      setPhone(editingAddress.phone);
      setAddress(editingAddress.address);
      setIsDefault(editingAddress.isDefault);
    }
  }, [editingAddress]);

  const handleSave = () => {
    if (!name || !phone || !address) return;

    const newAddress: Address = {
      id: editingAddress ? editingAddress.id : Date.now().toString(),
      name,
      phone,
      address,
      isDefault
    };

    let updatedAddresses = [...addresses];

    if (isDefault) {
      updatedAddresses = updatedAddresses.map(addr => ({ ...addr, isDefault: false }));
    }

    if (editingAddress) {
      updatedAddresses = updatedAddresses.map(addr => addr.id === editingAddress.id ? newAddress : addr);
    } else {
      updatedAddresses.push(newAddress);
    }

    setAddresses(updatedAddresses);
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] pt-32 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-[#2D463E] hover:bg-black/5 transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-3xl font-serif text-[#2D463E]">添加地址</h2>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-black/30 ml-2">收货人姓名</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="请输入姓名"
              className="w-full bg-white border border-black/5 rounded-2xl p-6 text-lg focus:outline-none focus:border-[#2D463E]/20 transition-colors"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-black/30 ml-2">联系电话</label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入联系电话"
              className="w-full bg-white border border-black/5 rounded-2xl p-6 text-lg focus:outline-none focus:border-[#2D463E]/20 transition-colors"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold uppercase tracking-widest text-black/30 ml-2">详细地址</label>
            <textarea 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="请输入详细地址（街道、门牌号等）"
              rows={4}
              className="w-full bg-white border border-black/5 rounded-2xl p-6 text-lg focus:outline-none focus:border-[#2D463E]/20 transition-colors resize-none"
            />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-black/5 flex items-center justify-between">
            <span className="text-lg font-bold text-[#2D463E]">设为默认地址</span>
            <button 
              onClick={() => setIsDefault(!isDefault)}
              className={`w-14 h-8 rounded-full transition-colors relative ${isDefault ? 'bg-[#2D463E]' : 'bg-black/10'}`}
            >
              <motion.div 
                animate={{ x: isDefault ? 24 : 4 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm"
              />
            </button>
          </div>
        </div>

        <div className="fixed bottom-12 left-0 right-0 z-40 flex justify-center px-6 pointer-events-none">
          <button 
            onClick={handleSave}
            className="w-full max-w-2xl bg-[#2D463E] text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-black/10 hover:bg-[#243831] transition-all active:scale-[0.98] pointer-events-auto"
          >
            保存地址
          </button>
        </div>
      </div>
    </div>
  );
}
