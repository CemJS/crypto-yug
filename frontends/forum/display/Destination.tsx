import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

export default function () {
  return (
    <section id="destination" class="relative z-[2] pb-12 pt-[60px]">
      <div class="wrapper wrapper_padding flex flex-col">
        <a
          href="https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjVmZDRmY2MzY2Y4MWJjNzgxY2Q2NWUxIn0.iCwX4g9OTJmsV8-kIU43WN89XFvg9oIG6MP_G2j9g1I&lang=ru&event=65fd54c03cf81bc781cd685a&s=1"
          target="_blank"
          class="mx-auto !mb-[0.625rem] !cursor-pointer !whitespace-nowrap !rounded-[0.875rem] !p-[0.625rem_1.5625rem] !text-[clamp(1.3rem,2vw,1.6875rem)] !font-bold !normal-case ![background:--greenGradient] ![border:var(--btnR)_solid_var(--green)] hover:!opacity-100 @1000:!p-[1rem_1.9375rem]"
        >
          Купить билет
        </a>
        <h2 class="my-6 text-center text-[clamp(1.5rem,4vw,5.625rem)] font-bold">
          Как добраться?
        </h2>
        <p class="mb-4 text-center text-[clamp(1.2rem,3vw,1.8125rem)] font-bold">
          пр. Ленина, 46А, Новороссийск
        </p>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1418.1632115502518!2d37.78703737877781!3d44.69253419488616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1f8513d5a629b%3A0x12adf0e3f8c3f95c!2z0L_RgC4g0JvQtdC90LjQvdCwLCA0NtCQLCDQndC-0LLQvtGA0L7RgdGB0LjQudGB0LosINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTM5MTA!5e0!3m2!1sru!2sru!4v1710320091855!5m2!1sru!2sru"
            width="100%"
            height="700"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
