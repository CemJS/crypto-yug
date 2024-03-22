import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import metis from "@images/forum/metis.png";
import racib from "@images/forum/racib.png";
import logo from "@svg/logo.svg";
import schedule3 from "@images/forum/schedule3.png";
import schedule4 from "@images/forum/schedule4.png";
import { DisplayImages } from "@elements/GalleryInfoSchedule";

const schedule = [
  {
    alt: "Расписание 3 июня",
    img: schedule3,
  },
  {
    alt: "Расписание 4 июня",
    img: schedule4,
  },
];

export default function () {
  let clickTimer;
  return (
    <section class="relative z-[2] mb-[4.375rem]">
      <div class="wrapper wrapper_padding">
        <div class="flex flex-col items-center gap-[2.5rem] text-center">
          <div class="w-[70%] max-w-[53.125rem]">
            <div class="text-[clamp(0.9rem,3vw,2.8125rem)] leading-[1.3]">
              Команда{" "}
              <span class="font-bold text-[--green]">Crypto Emergency</span>{" "}
              рада пригласить тебя на третий ежегодный криптофорум{" "}
              <span class="font-bold text-[--green]">Crypto Юг 2024</span>,
              который состоится 8 и 9 июня в г. Новороссийске.
            </div>
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              Организатор
            </h3>
            <img
              class="w-full max-w-[9.375rem] @1000:max-w-[15.625rem]"
              src={logo}
              alt="Crypto Emergency"
            />
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              Спонсор After party
            </h3>
            <img
              class="w-full max-w-[9.375rem] @1000:max-w-[15.625rem]"
              src={metis}
              alt="Metis"
            />
          </div>
          <div class="text-[clamp(2rem, 2vw, 3.25rem)] mb-[1.875rem] flex flex-col items-center gap-[2.1875rem]">
            <h3 class="text-[clamp(1.3rem,3vw,2.8125rem)] font-bold">
              При поддержке
            </h3>
            <img
              class="w-full max-w-[9.375rem] @1000:max-w-[15.625rem]"
              src={racib}
              alt="РАКИБ"
            />
          </div>
          <div class="flex flex-col gap-5">
            <h3
              onpointerdown={() => {
                clickTimer = false;
                setTimeout(() => {
                  clickTimer = true;
                }, 100);
              }}
              onpointerup={() => {
                !clickTimer ? Fn.initOne("modalGallery", { schedule: "0" }) : 0;
              }}
              class="cursor-pointer whitespace-nowrap rounded-[0.875rem] p-[0.3125rem_0.9375rem] text-center text-[clamp(1.3rem,3vw,2.8125rem)] font-bold [background:--greenGradient] [border:var(--btnR)_solid_var(--green)] [transition:all_1s_ease] @700:block @1000:p-[0.625rem_1.5625rem]"
            >
              Расписание форума
            </h3>
            {/* <DisplayImages
              items={schedule.map((item, index) => {
                return (
                  <div class="gallery_slide">
                    <img
                      onpointerup={() => {
                        Fn.initOne("modalGallery", { schedule: index });
                      }}
                      src={item.img}
                      alt={item.alt}
                      class="w-full max-w-[9.375rem] cursor-pointer @1000:max-w-[18.625rem]"
                    />
                  </div>
                );
              })}
            /> */}
            {/* <div class="flex w-full flex-col items-center gap-5 @500:flex-row">
              <img
                onpointerup={() => {
                  Fn.initOne("modalGallery", { schedule: "0" });
                }}
                src={schedule3}
                alt="Расписание 3 июня"
                class="w-full max-w-[9.375rem] cursor-pointer @1000:max-w-[18.625rem]"
              />
              <img
                onpointerup={() => {
                  Fn.initOne("modalGallery", { schedule: "1" });
                }}
                src={schedule4}
                alt="Расписание 4 июня"
                class="w-full max-w-[9.375rem] cursor-pointer @1000:max-w-[18.625rem]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
