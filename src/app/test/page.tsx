import Link from "next/link";

const Test = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/">누르면 홈으로</Link>
      <Link href={`/test/1`}>상세 페이지로</Link>
    </div>
  );
};

export default Test;
