import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";
import youtube from "@images/forum/youtube.svg";
import youtubeWhite from "@images/forum/youtube-white.svg";
import thanks from "@images/forum/thanks.svg";

export default function () {
  return (
    <div class="mb-10 mt-[140px] flex w-full flex-col items-center justify-center gap-[25px] px-[10px] text-center">
      <img class="w-full max-w-[200px]" src={thanks} alt="" />
      <p class="inline-block text-center text-[clamp(1.5rem,3vw,2rem)] font-bold">
        Спасибо за покупку
      </p>
      <a
        href="/"
        onclick={Fn.link}
        class="w-[8rem] cursor-pointer whitespace-nowrap rounded-[0.875rem] p-[0.625rem_0] text-center text-[0.75rem] [background:--greenGradient] [border:var(--btnR)_solid_var(--green)] [transition:all_1s_ease] @992:block"
      >
        На главную
      </a>
    </div>
  );
}
