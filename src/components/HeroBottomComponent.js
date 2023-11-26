import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Achieve <span class='text-[#F19F0D]'>Inner Peace and Resilience</span>",
  "Discover the <span class='text-[#F19F0D]'>Mysteries of Existence</span>",
  "Foster a <span class='text-[#F19F0D]'>Divine Connection</span>",
  "Harmonize Your <span class='text-[#F19F0D]'>Relationships and Personal Growth</span>",
];

export default function HeroBottom() {
  return (
    // <div className="bg-gray-900 py-24 sm:py-32">
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl sm:px-3 lg:px-4">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/20 px-6 py-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 xl:gap-x-20 xl:px-10">
          <img
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="./krishna_chariot.webp"
            alt=""
          />
          <div className="w-full flex-auto bg-white p-10 rounded-xl">
            {/* <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Subscribe to the ways of vedha
            </h2> */}
            <p className="text-xl leading-8 text-black">
              Join us on a journey to rediscover yourself.
              <br />
              The subscription helps you to:
            </p>
            <ul
              role="list"
              className="mt-10 flex flex-col gap-x-8 gap-y-3 text-xl leading-7 text-black sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-x-3 font-semibold">
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none"
                    aria-hidden="true"
                  />
                  <div dangerouslySetInnerHTML={{ __html: benefit }}></div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <button
                type="button"
                class="flex justify-center items-center max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full mx-auto p-5"
              >
                <div class="">Subscribe now!</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-50"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
    // </div>
  );
}
