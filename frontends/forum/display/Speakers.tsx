import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import speakers from "@json/forum/forumSpeakers";

let arrFinish = [];

speakers.forEach((item) => {
  if (item.visited.includes("CryptoЮГ2023") && arrFinish.length < 8) {
    arrFinish.push(item);
  }
});

const tabs = [
  {
    name: "CryptoЮГ2023",
  },
  {
    name: "CryptoЮГ2022",
  },
];

export default function () {
  return (
    <section id="speakers" class="event_section">
      <h2 class="mb-[5rem] text-center text-[clamp(3rem,6vw,5.625rem)] font-bold">
        Спикеры
      </h2>
      <div>
        <div class="relative mb-[1.5625rem] flex h-[3.75rem] cursor-pointer rounded-[0.9375rem] font-bold [background:rgba(0,0,0,0.3)]">
          {tabs.map((item, index) => {
            return (
              <span
                class="z-[2] flex w-full items-center justify-center text-center text-[clamp(0.8rem,2vw,1rem)]"
                ref="tabItem1"
                onclick={() => {
                  Static.activeIndex = index;
                  Ref.activeTab.style.left = `${Ref.tabItem1.offsetWidth * Static.activeIndex}px`;
                  Static.speakersTabName = item.name;
                  Fn.log("tab", speakers, arrFinish);
                  Ref.speakersContent.classList.add("animated");
                  setTimeout(() => {
                    Ref.speakersContent.classList.remove("animated");
                  }, 500);
                }}
              >
                {item.name}
              </span>
            );
          })}
          <div
            class="absolute left-0 top-0 z-[1] h-[3.75rem] w-1/2 rounded-[var(--borderR)] ease-in-out [background:rgba(255,255,255,0.09)] [box-shadow:0_0_0.625rem_0.0625rem_rgba(221,221,221,0.5)] [transition:all_0.35s]"
            ref="activeTab"
          ></div>
        </div>

        {/* speakers */}

        <div
          class="@1000:grid-cols-3 @1000:gap-[80px] @550:grid-cols-2 grid grid-cols-1 gap-[7vw] [transition:2s_linear] "
          ref="speakersContent"
        >
          {speakers
            .filter((item) => item.visited.includes(Static.speakersTabName))
            .slice(0, Static.howMutchSpeakers)
            .map((item, index) => {
              return (
                <div
                  class={[
                    "@550:max-w-[unset] mx-auto flex max-w-[14.5rem] flex-col items-center rounded-[50%]",
                  ]}
                >
                  <div class="mb-[0.625rem] flex w-full items-center justify-center [transition:1s]">
                    <img
                      class="h-full w-full rounded-[50%] [border:0.125rem_solid_var(--white)]"
                      src={`/contents/forum/speakers/${item.photo}`}
                      alt="img"
                    />
                  </div>
                  <div class="flex flex-col items-center gap-[0.3125rem] text-center leading-[1.2]">
                    <h3 class="text-[clamp(1rem,2vw,1.75rem)] font-medium">
                      {item.speaker}
                    </h3>
                    <p class="text-center text-[clamp(0.9rem,2vw,1.1rem)]">
                      {item.about_speaker}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* speakers show_all button */}

      <div
        class="flex cursor-pointer justify-end rounded-[0px_0px_0.625rem_0.625rem] border-none p-4 font-medium"
        ref="button"
        onclick={() => {
          if (Static.howMutchSpeakers == 6) {
            Static.howMutchSpeakers = speakers.length;
            Ref.buttonSpan.innerText = "Скрыть";
          } else {
            Static.howMutchSpeakers = 6;
            Ref.buttonSpan.textContent = "Показать всех";
          }
          Fn.log("=9b27aa=", speakers);
        }}
      >
        <span
          ref="buttonSpan"
          class="@1280:mx-0 mx-auto text-[clamp(1.3rem,2vw,1.6875rem)] font-bold underline"
        >
          Показать всех
        </span>
      </div>
    </section>
  );
}
