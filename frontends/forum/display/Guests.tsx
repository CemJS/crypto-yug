import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";
import youtube from "@images/forum/youtube.svg";

export default function () {
  return (
    <section
      id="guests"
      class="relative z-[2] mt-[60px] flex flex-col justify-center"
    >
      <div class="mb-10 inline-flex flex-col items-center justify-center gap-1 @464:flex-row @767:mb-20">
        <h2 class="inline-block text-center text-[clamp(1.5rem,4vw,5.625rem)] font-bold">
          Гости Crypto Emergency
        </h2>
      </div>
      <div class="grid w-full gap-[1.875rem] [grid-template-columns:repeat(2,minmax(7.375rem,1fr))] @1000:[grid-template-columns:repeat(3,minmax(7.375rem,1fr))] xl:[grid-template-columns:repeat(4,minmax(7.375rem,1fr))]">
        {guests.map((item) => {
          return (
            <a
              ontouchend={(e) => {
                console.log("=824d0f=", "touch");
                Fn.link(e);
              }}
              onclick={(e) => {
                if (e.pointerType == "mouse") {
                  console.log("=824d0f=", "mouse");
                  Fn.link(e);
                }
              }}
              href={item.href}
              target="_blank"
              class="mx-auto w-full max-w-[18.75rem] text-center"
            >
              <div class="relative mb-4 aspect-[1.77] w-full overflow-hidden rounded-[0.625rem]">
                <img src={item.image} alt={item.name} class="w-full" />
                <img
                  class="absolute bottom-2 left-2"
                  src={youtube}
                  alt="Youtube"
                />
              </div>

              <h4 class="mb-2 text-center text-[clamp(0.8rem,2vw,1.5rem)] font-medium leading-[1.2] text-[--white]">
                {item.name}
              </h4>
              {/* <button class="text-[clamp(2rem, 2vw, 3.25rem)] mx-auto my-3 flex cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-[0.875rem] p-[0.3125rem_0.9375rem] text-center font-bold [background:--greenGradient] [border:0.4px_solid_var(--green)] [transition:all_1s_ease]">
                <span class="text-[clamp(0.8rem,2vw,1rem)]">
                  Cмотреть <span class="hidden @500:inline">эфир</span>
                </span>
                <img class="h-[30px]" src={youtube} alt="Youtube" />
              </button> */}
              <p class="text-[clamp(0.75rem,2vw,1rem)] leading-[1.2]">
                {item.desc}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
