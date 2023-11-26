import Link from "next/link";
import HeroBottom from "./HeroBottomComponent";

export default function Hero() {
  return (
    <section class="w-screen universe-background flex justify-center items-center flex-col p-10">
      <div class="relative inline-flex group">
        <div class="absolute transitiona-all duration-1000 opacity-[200] -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-[40px] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="#"
          title="Get quote now"
          class="relative text-center inline-flex rounded-[40px] items-center justify-center px-4 py-2 text-lg font-semibold text-black transition-all duration-200 bg-white font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <span>
            <img src="/whatsapp.svg" className="mr-2" />
          </span>
          Receive Krishna&apos;s divine wisdom on Whatsapp!
        </Link>
      </div>
      <div class="text-white mt-10 text-center font-bold">
        <p class="md:text-[18px] lg:text-[32px]">
          Embark on a Spiritual Journey with Mahabharata&apos;s Timeless Wisdom
        </p>
        <p class="md:text-[16px] lg:text-[30px]">
          Start Your Effortless Path with a{" "}
          <span class="text-[#F19F0D]">2-Min WhatsApp Subscription.</span>
        </p>
      </div>
      <div class="mt-5">
        <HeroBottom></HeroBottom>
      </div>
    </section>
  );
}
