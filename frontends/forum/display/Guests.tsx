import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";
import youtube from "@images/forum/youtube.png";

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
        <img class="float-right h-[70px]" src={youtube} alt="Youtube" />
      </div>
      <div class="grid w-full gap-[1.875rem] [grid-template-columns:repeat(2,minmax(7.375rem,1fr))] @1000:[grid-template-columns:repeat(3,minmax(7.375rem,1fr))] xl:[grid-template-columns:repeat(4,minmax(7.375rem,1fr))]">
        {guests.map((item) => {
          return (
            <a
              onpointerup={Fn.link}
              href={item.href}
              target="_blank"
              class="mx-auto w-full max-w-[18.75rem] text-center"
            >
              <div class="mb-4 aspect-[1.77] w-full overflow-hidden rounded-[0.625rem]">
                <img src={item.image} alt={item.name} class="w-full" />
              </div>

              <h4 class="mb-2 text-center text-[clamp(0.8rem,2vw,1.5rem)] font-medium leading-[1.2] text-[--white]">
                {item.name}
              </h4>
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
