import { HiOutlineUserAdd } from 'react-icons/hi';

export default function HeroSection() {
  return (
    <section className="pt-14 text-center sm:pt-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-5xl">
        Friends to keep close in your life
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and
        nurture the relationships that matter most.
      </p>

      <button
        type="button"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#225c49] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1c4c3d]"
      >
        <HiOutlineUserAdd className="text-lg" />
        Add a Friend
      </button>
    </section>
  );
}