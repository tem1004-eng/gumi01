
import React from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-10 flex justify-center animate-bounce">
            <span className="rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold leading-6 text-blue-300 ring-1 ring-inset ring-blue-500/30 backdrop-blur-sm">
              구미노회 교육부 주관
            </span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            AI 시대와 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">목회</span>
          </h1>
          <p className="mt-8 text-xl leading-9 text-gray-200 drop-shadow-md font-medium max-w-2xl mx-auto">
            급변하는 인공지능 시대 속에서 교회가 나아가야 할 방향을 함께 고민합니다. 
            목회 현장의 실제적인 적용 방법과 신학적 고찰을 다루는 이번 세미나에 
            귀한 동역자 여러분을 초대합니다.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <button
              onClick={onOpenForm}
              className="group relative inline-flex items-center justify-center rounded-2xl bg-blue-600 px-12 py-5 text-2xl font-black text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all transform hover:scale-105"
            >
              <span className="mr-2">지금 참가 신청하기</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
