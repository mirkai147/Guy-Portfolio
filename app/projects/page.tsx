import Link from "next/link";

const projects = [
  {
    title: "붕괴: 스타레일 분석서",
    desc: "성장 구조 및 BM 분석을 통한 유저 유지 전략 분석",
    path: "/projects/starrail",
    category: "🎮 분석 프로젝트",
    image: "/images/starrail.jpg",
  },
  {
    title: "운빨존많겜 FunQA 분석서",
    desc: "사용자 경험 기반 재미 포인트 분석 및 개선 방향 제시",
    path: "/projects/luckyqa",
    category: "🎮 분석 프로젝트",
    image: "/images/luckyqa.jpg",
  },

  {
    title: "이사만루 테스트 케이스",
    desc: "스포츠 게임 기능 검증 및 재현 가능한 테스트 설계",
    path: "/projects/isa",
    category: "🧪 테스트 케이스",
    image: "/images/isa.jpg",
  },
  {
    title: "마스터 듀얼 테스트 케이스",
    desc: "카드 게임 규칙 기반 시나리오 테스트 설계",
    path: "/projects/masterduel",
    category: "🧪 테스트 케이스",
    image: "/images/masterduel.jpg",
  },
  {
    title: "운빨존많겜 테스트 케이스",
    desc: "랜덤 시스템 안정성 및 확률 검증",
    path: "/projects/luckytest",
    category: "🧪 테스트 케이스",
    image: "/images/luckytest.jpg",
  },

  {
    title: "쇼핑몰 웹 프로젝트",
    desc: "Spring MVC 구조 기반 웹 사이트 구축",
    path: "/projects/web",
    category: "💻 개발 프로젝트",
    image: "/images/web.jpg",
  },
  {
    title: "종스크롤 게임 개발 프로젝트",
    desc: "유니티 기반 종스크롤 러닝 액션 슈팅",
    path: "/projects/unity",
    category: "💻 개발 프로젝트",
    image: "/images/unity.jpg",
  },
];

export default function Projects() {
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* 🔥 헤더 */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Portfolio Projects
        </h1>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-gray-500 mt-6">
          분석 · 테스트 · 개발 프로젝트 모음
        </p>
      </div>

      {/* 🔥 카테고리별 출력 */}
      {categories.map((category) => (
        <div key={category} className="mb-16">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {category}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
            {projects
              .filter((p) => p.category === category)
              .map((p) => (
                <Link key={p.path} href={p.path}>
                  <div className="group h-full flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

                    {/* 이미지 */}
                    <div className="relative h-48 overflow-hidden">

                      <img
                        src={p.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        alt={p.title}
                      />

                      {/* 어두워지는 오버레이 (hover 느낌 강화) */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                    </div>

                    {/* 내용 */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {p.title}
                      </h3>

                      <p className="text-gray-500 text-sm mb-4">
                        {p.desc}
                      </p>

                      <span className="mt-auto text-xs text-emerald-500 font-semibold">
                        자세히 보기 →
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
          </div>

        </div>
      ))}

    </main>
  );
}