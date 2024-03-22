import { Cemjsx, Fn, Ref, front } from "cemjs-all";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/footerSocial";
import show from "@svg/icons/footerShow.svg";

export default function () {
  return (
    <footer
      init={($el) => {
        front.Variable.$el.footer = $el;
      }}
      class="relative z-0 mt-4"
    >
      <div class="wrapper flex flex-col gap-[2.125rem] lg:gap-[4.125rem]">
        <div class="flex flex-col items-center justify-between gap-7 py-5 [border-top:1px_solid_#353944]">
          <div class="order-1">©2020-2024 Crypto Emergency</div>
          <div class="flex flex-wrap justify-center gap-[0.9375rem]">
            {socials.map((item, i) => {
              return (
                <a
                  href={item.href}
                  target="_blank"
                  class="relative inline-flex h-8 w-8 touch-none items-center justify-center rounded-[--ellipse] [background:rgba(255,255,255,0.09)] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:all_0.3s_ease] hover:scale-110 hover:[background:transparent] hover:[border:1px_solid_var(--border)]"
                >
                  <img
                    class="pointer-events-none h-[0.7rem]"
                    src={item.img}
                    alt={item.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
