export default function LuckyQA() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          운빨존많겜 FunQA 분석
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          사용자 경험 기반 문제 분석
        </p>
      </div>

      {/* 목적 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 목적</h2>
        <p>사용자 경험 기반 재미 요소 분석 및 불편 요소 개선 방향 제시</p>
      </section>

      {/* 분석서 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">📄 분석서</h2>

          <a
            href="/luckyqa.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-emerald-400 text-emerald-600 hover:bg-emerald-50 transition"
          >
            새창으로 보기
          </a>
        </div>

        <iframe
          src="/luckyqa.pdf"
          className="w-full h-[700px] rounded-xl border border-gray-200"
        />

      </section>

    </main>
  );
}