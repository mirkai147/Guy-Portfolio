import TablePreview from "../../../components/TablePreview";

export default function Isa() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          이사만루 테스트 케이스
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          스포츠 게임의 기능 안정성을 검증한 테스트 설계
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 테스트 목적</h2>
        <p>
          핵심 시스템의 정상 동작 여부와 사용자 경험 저해 요소를 사전 탐지
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">📊 주요 테스트</h2>
        <ul className="list-disc ml-6">
          <li>경기 흐름 검증</li>
          <li>UI 상태 변화 확인</li>
          <li>데이터 저장 검증</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">📄 테스트 케이스</h2>

        <TablePreview file="/isa.xlsx" />

        <a href="/isa.xlsx" className="text-emerald-500 mt-4 inline-block">
          전체 다운로드 →
        </a>
      </section>

    </main>
  );
}