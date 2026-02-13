
import React, { useState } from 'react';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import SuccessState from './components/SuccessState';
import InquiryModal from './components/InquiryModal';
import { RegistrationData, AppState } from './types';
import { generateWelcomeMessage } from './services/geminiService';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    isFormOpen: false,
    isSubmitted: false,
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenForm = () => setState(prev => ({ ...prev, isFormOpen: true }));
  const handleCloseForm = () => setState(prev => ({ ...prev, isFormOpen: false }));

  const handleOpenInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsInquiryOpen(true);
  };

  const handleSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);
    
    try {
      await fetch("https://formspree.io/f/tempusan@hanmail.net", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: `[세미나 신청] ${data.churchName} - ${data.name} ${data.position}`,
          church: data.churchName,
          name: data.name,
          position: data.position,
          message: `${data.churchName} 소속 ${data.name} ${data.position}님이 AI 세미나 참가를 신청하셨습니다.`
        })
      });
    } catch (error) {
      console.error("이메일 전송 중 오류 발생:", error);
    }
    
    const aiWelcome = await generateWelcomeMessage(data);

    setState({
      isFormOpen: false,
      isSubmitted: true,
      lastRegistration: data,
      aiMessage: aiWelcome,
    });
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setState({
      isFormOpen: false,
      isSubmitted: false,
    });
  };

  return (
    <div className="app-bg selection:bg-blue-500/30">
      {/* Navigation Header */}
      <nav className="fixed w-full z-40 bg-slate-900/40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">G</div>
              <span className="text-lg font-bold text-white tracking-tight">구미노회</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={handleOpenInquiry}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                문의하기
              </button>
              <button 
                onClick={handleOpenForm}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 border border-blue-400/30"
              >
                신청하기
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {!state.isSubmitted && <Hero onOpenForm={handleOpenForm} />}
        
        {state.isFormOpen && (
          <RegistrationForm 
            onClose={handleCloseForm} 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}

        {state.isSubmitted && state.lastRegistration && (
          <SuccessState 
            data={state.lastRegistration} 
            aiMessage={state.aiMessage}
            onReset={handleReset}
          />
        )}

        {isInquiryOpen && (
          <InquiryModal onClose={() => setIsInquiryOpen(false)} />
        )}

        {/* Minimal Seminar Info */}
        {!state.isSubmitted && (
          <section className="pb-24 pt-12">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <h3 className="font-bold text-blue-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    세미나 안내
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    구미노회 교육부 주관으로 진행되는 이번 세미나는 인공지능 기술의 목회적 활용 방안을 모색합니다.
                  </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <h3 className="font-bold text-purple-400 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    참가 대상
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    구미노회 소속 담임목사, 장로, 부교역자 분들의 많은 참여를 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm italic">© 2024 구미노회 교육부. 신청 정보는 관리자 메일로 안전하게 전달됩니다.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
