"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "붕괴: 스타레일 분석서",
    desc: "성장 구조 및 BM 분석",
    path: "/projects/starrail",
    image: "/images/starrail.jpg",
  },
  {
    title: "운빨존많겜 FunQA 분석서",
    desc: "사용자 경험 기반 재미 및 개선 포인트 분석",
    path: "/projects/luckyqa",
    image: "/images/luckyqa.jpg",
  },
  {
    title: "운빨존많겜 테스트 케이스",
    desc: "확률 시스템 검증 및 안정성 테스트",
    path: "/projects/luckytest",
    image: "/images/luckytest.jpg",
  },
  {
    title: "마스터 듀얼 테스트 케이스",
    desc: "카드 게임 규칙 기반 테스트",
    path: "/projects/masterduel",
    image: "/images/masterduel.jpg",
  },
  {
    title: "이사만루 테스트 케이스",
    desc: "스포츠 게임 기능 검증 및 테스트 설계",
    path: "/projects/isa",
    image: "/images/isa.jpg",
  },
];

export default function Home() {

  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, []);

  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleCopy = async () => {
  await navigator.clipboard.writeText("mirkai@naver.com");

  setVisible(true);
  setLeaving(false);

  // 사라지기 시작
  setTimeout(() => {
    setLeaving(true);
  }, 1500);

  // DOM 제거 (애니메이션 끝난 뒤)
  setTimeout(() => {
    setVisible(false);
  }, 2000);
};

  return (
    <main className="min-h-screen font-sans selection:bg-emerald-500/20">

      {/* 1️⃣ Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

        {/* 전체 Wrapper: 여기서 중앙 그라데이션 효과를 관리합니다 */}
        <div className="relative flex items-center justify-center h-full w-full">

          {/* 배경 이미지 */}
          <img
            src="/images/monument.png"
            alt="background decoration"
            className={`
              absolute w-[350px] md:w-[600px]
              pointer-events-none select-none blur-[3px]
              transition-all duration-3000 ease-in-out delay-100

              ${loaded ? "opacity-25 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          />
          
          {/* 중앙은 투명하고, 외각으로 갈수록 배경색(흰색 계열)으로 변하는 그라데이션 */}
          <div className="absolute inset-0 z-0
                          bg-[radial-gradient(circle_at_center,_transparent_10%,_#f7f8f9_80%)]">
          </div>

          {/* 텍스트 컨테이너 */}
          <div className="relative z-10 px-8 py-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
              게임의 문제를 발견하고
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium drop-shadow-sm">
              개선안을 제시하는{" "}
              <span className="bg-emerald-400/20 text-emerald-400 px-1 rounded
              font-semibold [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">QA</span> 김가이입니다.
            </h2>
          </div>

        </div>

      </section>

      {/* 2️⃣ Intro */}
      <section id="intro" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Intro</h2>
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 왼쪽 */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-emerald-500">
              안녕하세요, 김가이입니다 👋
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                게임의 문제를 분석하고 개선하는 게임 QA 전문가를 목표로 하고 있습니다.
              </p>
              <p>
                게임 제작과 웹 프로젝트 등 다양한 경험을 통해 역량을 길러왔고, 기능 검증뿐만 아니라 사용자 관점에서의 문제를 바라보는 시각을 키워왔습니다.
              </p>
              <p>
                단순히 오류를 찾는 QA가 아니라, 서비스의 구조와 사용자 경험을 함께 이해하며 개선 방향까지 고민하는 QA로 성장하고자 합니다.
              </p>
              <p>
                다양한 프로젝트 경험을 통해 문제를 더 깊이 이해하고, 더 나은 품질을 만들어가는 QA로 계속 성장해 나가겠습니다. 
              </p>
            </div>
          </div>

          {/* 오른쪽 카드 */}
          <div className="grid gap-4">
            {[
              { title: "🌍 Game QA Specialist (2025.05 ~ 2026.01)", 
                desc: "게임 QA 실무 프로세스를 집중적으로 학습하며 테스트 케이스 설계 및 결함 관리 역량을 쌓았습니다. 개발 지식과 QA 방법론을 융합하여, 효율적이고 논리적인 테스트 전략을 수립하는 신입 QA입니다." },
              { title: "📊 Web Back-end (2022.11 ~ 2023.05)", 
                desc: "JSP와 Spring 프레임워크를 활용하여 서버 로직과 데이터베이스(SQL) 설계 과정을 이수했습니다. 시스템의 동작 원리를 이해하고 있어, 통신 오류나 DB 정합성 문제를 기술적으로 추적할 수 있습니다." },
              { title: "🔍 Web Front-end (2020.02 ~ 2020.08)", 
                desc: "HTML, CSS, JavaScript를 기반으로 사용자 중심의 웹 인터페이스 구현 능력을 습득했습니다. UI/UX의 구조적 이해를 바탕으로, 게임 런처나 웹 이벤트 페이지 등 사용자 접점에서의 세밀한 검수가 가능합니다." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-400 transition-all shadow-sm hover:shadow-md"
              >
                <div className="text-lg font-semibold mb-1 text-gray-900">
                  {item.title}
                </div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-700 italic">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Tools */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2 text-gray-900">
                <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                QA / Testing Tools
              </h4>

              {[
                { name: "Git / GitHub", level: 85 },
                { name: "SQL / Database", level: 80 },
                { name: "Jira", level: 75 },
                { name: "Postman", level: 80 },
                { name: "PS Studio", level: 70 },
                { name: "Office", level: 75 },
              ].map((tool) => (
                <div key={tool.name} className="mb-6 last:mb-0">
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span className="text-gray-700">{tool.name}</span>
                    <span className="text-blue-500">{tool.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 기타 */}
            <div className="flex flex-col gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                  Engineering Background
                </h4>

                <div className="space-y-3 text-gray-600">
                  <div><span className="font-bold">• Web Dev: </span>Spring, Node 기반 풀스택 웹 프로젝트 경험</div>
                  <div><span className="font-bold">• Database: </span>SQL을 활용한 데이터 조회 및 검증 능력 보유</div>
                  <div><span className="font-bold">• Tools: </span>Git/GitHub를 활용한 코드 형상 관리 및 협업 숙련</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
                  QA 방법론
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "경계값 분석", "동등 분할", "Positive / Negative",
                    "탐색적 테스트", "회귀 테스트", "테스트 케이스 설계",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 bg-gray-100 rounded-xl text-center text-sm font-medium hover:bg-gray-200 transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3️⃣ Portfolio */}
      <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto border-t border-gray-200">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            프로젝트 산출물들이 계속해서 업데이트될 예정입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <a key={idx} href={item.path} className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">

                {/* 이미지 */}
                <div className="relative h-48 overflow-hidden">
                  
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* 🔥 어두워지는 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                </div>

                {/* 텍스트 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {item.desc}
                  </p>
                </div>

              </div>
            </a>
          ))}

          {/* 🔥 전체 보기 카드 */}
          <a href="/projects" className="group h-full">
            <div className="h-full flex flex-col justify-center items-center 
              bg-gradient-to-br from-emerald-500 to-teal-400 text-white 
              rounded-2xl p-10 hover:shadow-xl transition-all hover:-translate-y-1">

              <div className="text-3xl mb-3">📂</div>
              <h3 className="text-xl font-bold">전체 포트폴리오</h3>
              <p className="text-sm mt-2 opacity-80">
                모든 프로젝트 보기
              </p>

            </div>
          </a>
        </div>
      </section>

      {/* 4️⃣ Contact */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto border-t border-gray-200">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact</h2>
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <div
            onClick={handleCopy}
            className="group cursor-pointer bg-white border border-gray-200 p-8 rounded-3xl flex items-center gap-5
            hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-400
            hover:shadow-lg hover:-translate-y-1 active:scale-95
            transition-all duration-300"
          >
            <div className="text-2xl group-hover:text-white">📧</div>

            <div>
              <p className="text-xs text-gray-400 mb-1 group-hover:text-white/70 transition">
                Email
              </p>
              <p className="font-semibold group-hover:text-white transition">
                mirkai@naver.com
              </p>
            </div>
          </div>

         {/* Blog */}
        <a
          href="https://blog.naver.com/mirkai"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-gray-200 p-8 rounded-3xl flex items-center gap-5
          hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-400
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div className="text-2xl group-hover:text-white">📝</div>

          <div>
            <p className="text-xs text-gray-400 mb-1 group-hover:text-white/70 transition">
              Blog
            </p>
            <p className="font-semibold group-hover:text-white transition">
              blog.naver.com/mirkai
            </p>
          </div>
        </a>

        {/* Github */}
        <a
          href="https://github.com/mirkai147"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-gray-200 p-8 rounded-3xl flex items-center gap-5
          hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-400
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div className="text-2xl group-hover:text-white">🐙</div>

          <div>
            <p className="text-xs text-gray-400 mb-1 group-hover:text-white/70 transition">
              Github
            </p>
            <p className="font-semibold group-hover:text-white transition">
              github.com/mirkai147
            </p>
          </div>
        </a>

        {/* Youtube */}
        <a
          href="https://youtube.com/@제피야"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-gray-200 p-8 rounded-3xl flex items-center gap-5
          hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-400
          hover:shadow-lg hover:-translate-y-1
          transition-all duration-300"
        >
          <div className="text-2xl group-hover:text-white">▶️</div>

          <div>
            <p className="text-xs text-gray-400 mb-1 group-hover:text-white/70 transition">
              Youtube
            </p>
            <p className="font-semibold group-hover:text-white transition">
              youtube.com/@제피야
            </p>
          </div>
        </a>
        </div>
      </section>
      {/* 🔥 토스트 알림 */}
      {visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 ${
              leaving ? "animate-fade-out" : "animate-slide-up"
            }`}
          >
            <span className="text-lg">📋</span>
            <span className="text-sm font-medium">
              이메일이 복사되었습니다
            </span>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-200">
        Designed by Kim Guy.
      </footer>

    </main>
  );
}