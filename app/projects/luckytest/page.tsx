import TablePreview from "../../../components/TablePreview";

export default function LuckyTest() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          운빨존많겜 테스트 케이스
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          랜덤 시스템 검증 테스트
        </p>
      </div>

      {/* 목적 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 테스트 목적</h2>
        <p>랜덤 요소가 의도된 확률과 일관성을 유지하는지 검증</p>
      </section>

      {/* 테스트 케이스 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">📄 테스트 케이스</h2>

          <a
            href="/luckytest.xlsx"
            className="text-sm px-4 py-2 rounded-lg border border-emerald-400 text-emerald-600 hover:bg-emerald-50 transition"
          >
            전체 다운로드
          </a>
        </div>

        <TablePreview file="/luckytest.xlsx" />

      </section>

    </main>
  );
}