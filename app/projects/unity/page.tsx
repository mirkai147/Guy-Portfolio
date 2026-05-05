export default function UnityProject() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Unity 게임 프로젝트
        </h1>

        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>

        <p className="text-gray-500 mt-6">
          Unity 엔진을 활용한 간단한 2D 게임 제작 프로젝트
        </p>
      </div>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🧩 프로젝트 개요</h2>
        <p>
          Unity Engine을 사용하여 플레이어 조작, 충돌 처리, 간단한 게임 로직이 포함된 미니 게임을 제작했습니다.
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🎮 주요 기능</h2>
        <ul className="list-disc ml-6">
          <li>플레이어 이동 (키보드 / 터치 입력)</li>
          <li>오브젝트 충돌 및 이벤트 처리</li>
          <li>간단한 UI 점수 시스템</li>
          <li>게임 시작 / 종료 로직</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">🛠 사용 기술</h2>
        <ul className="list-disc ml-6">
          <li>Unity Engine</li>
          <li>C# Script</li>
          <li>2D Physics / Collider</li>
          <li>Unity UI System</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold mb-2">💡 인사이트</h2>
        <p>
          Unity 오브젝트 중심 구조와 이벤트 기반 로직 설계 중요성 이해.
        </p>
      </section>

      <section className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">

      {/* 헤더 + 작은 설명 */}
      <div className="flex items-end gap-3 mb-4">
        <h2 className="text-xl font-semibold">📸 결과물</h2>
        <span className="text-xs text-gray-400">
          이미지 클릭 시 Github 이동
        </span>
      </div>

      {/* 이미지 */}
      <a
        href="https://github.com/mirkai147/Unity_pro1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/unity.jpg"
          alt="Unity Result"
          className="w-full h-[700px] object-cover rounded-xl border cursor-pointer hover:opacity-90 transition"
        />
      </a>

    </section>

    </main>
  );
}