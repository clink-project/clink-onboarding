import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            블록 코딩으로 쉽게 백엔드 배포하기
          </h1>
          <p className="text-center text-2xl text-white">
            Clink는 블록 코딩의 형태로 쉽게 백엔드를 배포할 수 있는
            서비스입니다.
          </p>
          <Link href="/sandbox">
            <p className="cursor-pointer text-lg text-white underline">
              체험해보기
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
