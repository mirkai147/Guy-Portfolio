export default function StarRail() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          붕괴: 스타레일 분석
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">성장 구조 및 BM 분석</p>
      </div>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">📌 프로젝트 개요</h2>
        <p className="mt-2">성장 구조와 BM을 분석하여 유저 유지 전략 도출</p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">📊 핵심 분석</h2>
        <p className="mt-2">확정 성장 + 확률 성장 구조로 몰입 유도</p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">💡 개선안</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>고유명사 UX 개선</li>
          <li>캐릭터 배치 시스템</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">📄 분석서</h2>

          <a
            href="/starrail.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-emerald-400 text-emerald-600 hover:bg-emerald-50 transition"
          >
            새창으로 보기
          </a>
        </div>

        <iframe
          src="/starrail.pdf"
          className="w-full h-[700px] rounded-xl border border-gray-200"
        />

      </section>

    </main>
  );
}