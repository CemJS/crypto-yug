import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

export default function () {
  return (
    <div class="w-full text-center">
      <h2 class="my-4 text-center text-[clamp(1.5rem,4vw,5.625rem)] font-bold">
        After Party
      </h2>
      <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">9 июня</h3>
      <div class="my-8 flex w-full flex-col items-center gap-6 @767:flex-row">
        <img
          class="w-full max-w-[600px] rounded-[20px] @767:w-[48%] @767:rounded-[40px]"
          src="/contents/forum/afterParty.png"
          alt="After party"
        />
        <img
          class="w-full max-w-[600px] rounded-[20px] @767:w-[48%] @767:rounded-[40px]"
          src="/contents/forum/vinnipuh.png"
          alt="Jambey"
        />
      </div>
    </div>
  );
}
