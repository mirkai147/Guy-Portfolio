export default function StarRail() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          붕괴: 스타레일 분석
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          성장 구조 및 BM 분석
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">📌 프로젝트 개요</h2>
        <p className="mt-2">
          성장 구조와 BM을 분석하여 유저 유지 전략 도출
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">📊 핵심 분석</h2>
        <p className="mt-2">
          확정 성장 + 확률 성장 구조로 몰입 유도
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold">💡 개선안</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>고유명사 UX 개선</li>
          <li>캐릭터 배치 시스템</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">📄 분석서</h2>

        <iframe
          src="/starrail.pdf"
          className="w-full h-[700px] rounded-xl border"
        />

        <a href="/starrail.pdf" target="_blank" className="text-emerald-500 mt-3 inline-block">
          새창으로 보기 →
        </a>
      </section>

    </main>
  );
}