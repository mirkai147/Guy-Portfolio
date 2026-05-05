import TablePreview from "../../../components/TablePreview";

export default function LuckyTest() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          운빨존많겜 테스트 케이스
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          랜덤 시스템 검증 테스트
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 테스트 목적</h2>
        <p>
          랜덤 요소가 의도된 확률과 일관성을 유지하는지 검증
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">📄 테스트 케이스</h2>

        <TablePreview file="/luckytest.xlsx" />

        <a href="/luckytest.xlsx" className="text-emerald-500 mt-4 inline-block">
          전체 다운로드 →
        </a>
      </section>

    </main>
  );
}