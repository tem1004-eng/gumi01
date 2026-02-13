
import React from 'react';
import { RegistrationData } from '../types';

interface SuccessStateProps {
  data: RegistrationData;
  aiMessage?: string;
  onReset: () => void;
}

const SuccessState: React.FC<SuccessStateProps> = ({ data, aiMessage, onReset }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xl overflow-y-auto">
      <div className="max-w-2xl w-full text-center py-12 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-2 ring-1 ring-green-500/50">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-white mb-2 drop-shadow-lg">신청이 완료되었습니다!</h2>
          <p className="text-xl text-blue-200 font-medium">{data.churchName} {data.name} {data.position}님, 환영합니다.</p>
        </div>

        {/* AI Welcome Message */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-left border border-white/20 shadow-2xl">
          <h3 className="text-blue-400 font-bold mb-4 flex items-center text-sm uppercase tracking-widest">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            AI 축복 및 환영 메시지
          </h3>
          <p className="text-gray-100 leading-relaxed text-lg whitespace-pre-wrap italic font-light">
            {aiMessage || "메시지를 생성 중입니다..."}
          </p>
        </div>

        {/* Participant Notices */}
        <div className="bg-white rounded-3xl text-left border border-white shadow-2xl overflow-hidden">
          <div className="bg-slate-50 px-8 py-6 border-b border-gray-100">
             <h3 className="text-gray-900 font-black text-2xl">참가자 필수 안내사항</h3>
          </div>
          <div className="p-8 space-y-5">
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-black mr-4 mt-0.5 shadow-md">1</span>
                <span>세미나와 강의의 원활한 진행을 위해 <span className="font-bold text-gray-900 underline decoration-blue-500 underline-offset-4">노트북이나 태블릿을 꼭 지참</span>해 주세요.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-black mr-4 mt-0.5 shadow-md">2</span>
                <span>강의 시작 <span className="font-bold text-gray-900">시간을 엄수</span>해 주시기 바랍니다.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-black mr-4 mt-0.5 shadow-md">3</span>
                <span>실습을 위해 <span className="font-bold text-gray-900">구글 계정</span>을 미리 확인하시고, <span className="text-blue-600 font-bold italic">이메일과 비밀번호</span>를 꼭 숙지해 오세요.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-black mr-4 mt-0.5 shadow-md">4</span>
                <span>참가 신청하신 분들께는 강사 목사님의 <span className="font-bold text-gray-900">귀한 교재 파일</span>을 무료 제공합니다.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-black mr-4 mt-0.5 shadow-md">5</span>
                <span><span className="font-bold text-gray-900 text-blue-600">전용 단톡방</span>을 통해 강사님과 지속적인 정보 교류가 이루어질 예정입니다.</span>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <p className="font-black text-3xl text-blue-600 animate-pulse">감사합니다!</p>
            </div>
          </div>
        </div>

        <button
          onClick={onReset}
          className="px-12 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all font-bold border border-white/20 backdrop-blur-md"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default SuccessState;
