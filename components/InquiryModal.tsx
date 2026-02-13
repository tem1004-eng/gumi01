
import React from 'react';

interface InquiryModalProps {
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ onClose }) => {
  const phoneNumber = '01028034454';
  const displayPhone = '010-2803-4454';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-1">교육부 문의</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            교육부 서기 <span className="text-gray-900 font-bold">백성현 목사</span><br />
            <span className="text-blue-600 font-semibold">{displayPhone}</span>
          </p>

          <div className="space-y-3">
            <a
              href={`sms:${phoneNumber}`}
              className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-full font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              문자 보내기
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center w-full bg-white text-blue-600 border-2 border-blue-600 py-3 px-6 rounded-full font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
              전화하기
            </a>
          </div>

          <button
            onClick={onClose}
            className="mt-6 text-gray-400 text-sm hover:text-gray-600 transition-colors underline underline-offset-4"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
