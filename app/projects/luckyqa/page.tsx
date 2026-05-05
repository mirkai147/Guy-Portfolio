export default function LuckyQA() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          운빨존많겜 FunQA 분석
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          사용자 경험 기반 문제 분석
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 목적</h2>
        <p>불편 요소 발견 및 개선 방향 제시</p>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">📄 분석서</h2>

        <iframe
          src="/luckyqa.pdf"
          className="w-full h-[700px] rounded-xl border"
        />

        <a href="/luckyqa.pdf" target="_blank" className="text-emerald-500 mt-3 inline-block">
          새창으로 보기 →
        </a>
      </section>

    </main>
  );
}