import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import partners from "@json/forum/forumPartners";

export default function () {
  return (
    <section id="partners" class="relative z-[2]">
      <div class="wrapper wrapper_padding">
        <h2 class="my-6 text-center text-[clamp(3rem,6vw,5.625rem)] font-bold">
          Партнеры
        </h2>
        <div class="@767:grid-cols-4 grid grid-cols-2 gap-[0.625rem]">
          {partners?.map((item) => {
            return (
              <a
                href={item.url}
                target="_blank"
                class="flex h-[120px] w-full overflow-hidden rounded-[10px] pb-[10px] pt-[10px] text-center [border:1px_solid_#01c8ab]"
              >
                <img
                  class="m-auto max-h-[100%] max-w-[82%]"
                  src={`/contents/forum/partners/${item?.logo}`}
                  alt="Партнёр"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}