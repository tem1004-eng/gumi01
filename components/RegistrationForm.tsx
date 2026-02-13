
import React, { useState } from 'react';
import { Position, RegistrationData } from '../types';

interface RegistrationFormProps {
  onClose: () => void;
  onSubmit: (data: RegistrationData) => void;
  isSubmitting: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    churchName: '',
    name: '',
    position: Position.SeniorPastor,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.churchName || !formData.name) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white tracking-tight">세미나 참가 신청</h2>
          <button onClick={onClose} className="text-white hover:text-blue-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">교회 이름</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="예: 구미영광교회"
              value={formData.churchName}
              onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">성함</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="성함을 입력하세요"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">직분</label>
            <div className="grid grid-cols-1 gap-2">
              {Object.values(Position).map((pos) => (
                <label
                  key={pos}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.position === pos
                      ? 'bg-blue-50 border-blue-500 text-blue-700 font-medium'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="position"
                    value={pos}
                    checked={formData.position === pos}
                    onChange={() => setFormData({ ...formData, position: pos })}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                    formData.position === pos ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {formData.position === pos && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                  </div>
                  {pos}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  신청 처리 중...
                </div>
              ) : '신청 완료하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
