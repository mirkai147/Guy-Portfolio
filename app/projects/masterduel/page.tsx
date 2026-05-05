import TablePreview from "../../../components/TablePreview";

export default function MasterDuel() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          마스터 듀얼 테스트 케이스
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          카드 게임 규칙 기반 테스트
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 테스트 목적</h2>
        <p>
          카드 효과와 게임 규칙이 정상적으로 동작하는지 검증
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">📊 주요 테스트</h2>
        <ul className="list-disc ml-6">
          <li>카드 효과 발동 조건</li>
          <li>턴 진행 로직</li>
          <li>예외 처리</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">📄 테스트 케이스</h2>

        <TablePreview file="/masterduel.xlsx" />

        <a href="/masterduel.xlsx" className="text-emerald-500 mt-4 inline-block">
          전체 다운로드 →
        </a>
      </section>

    </main>
  );
}