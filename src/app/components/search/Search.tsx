"use client"


import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const keyworkDefault = searchParams.get('keyword') || "";
  const handleSearch = (event: any) => {
    event.preventDefault();
    const keywork = event.target.keyword.value;
    console.log(keywork);
    if(keywork) router.push(`/search?keyword=${keywork}`)
  };
  return (
    <>
      <form
        className="bg-BGD rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="keyword"
          placeholder="tim kiem"
          className="order-2 flex-1 outline-none bg-transparent text-[16px] font-[600]"
          defaultValue={keyworkDefault}
        />
        <button
          type="submit"
          className="text-white order-1 text-[22px] mr-[20px]"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
}
