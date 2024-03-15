import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

export default function () {
  return (
    <section id="destination" class="relative z-[2] pb-[30px] pt-[100px]">
      <div class="wrapper wrapper_padding">
        <h2 class="my-6 text-center text-[clamp(1.5rem,4vw,5.625rem)] font-bold">
          Как добраться?
        </h2>
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
