export default function WebProject() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          쇼핑몰 웹 프로젝트
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          Spring MVC 기반 QA 분석
        </p>
      </div>

      {/* 시스템 구조 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🧱 시스템 구조</h2>
        <p>Controller → Service → DAO → DB 구조 기반 분석</p>
      </section>

      {/* 테스트 포인트 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎯 테스트 포인트</h2>
        <ul className="list-disc ml-6">
          <li>로그인 인증</li>
          <li>상품 데이터</li>
          <li>주문 흐름</li>
        </ul>
      </section>

      {/* 인사이트 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">💡 인사이트</h2>
        <p>데이터 흐름 기반 QA 설계 중요성 확인</p>
      </section>

      {/* 자료 */}
      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">📄 자료</h2>

          <a
            href="/shoppingmall.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-emerald-400 text-emerald-600 hover:bg-emerald-50 transition"
          >
            새창으로 보기
          </a>
        </div>

        <iframe
          src="/shoppingmall.pdf"
          className="w-full h-[700px] rounded-xl border border-gray-200"
        />

      </section>

    </main>
  );
}