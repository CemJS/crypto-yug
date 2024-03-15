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
                  href={!Array.isArray(item.href) ? item.href : ""}
                  onclick={(e) => {
                    if (!Array.isArray(item.href)) {
                      Fn.link(e);
                    } else {
                      console.log("=ea0be9=", e);
                      e.preventDefault();
                      Ref[`lang${i}`].classList.toggle("opacity-100");
                      Ref[`lang${i}`].classList.toggle("!pointer-events-auto");
                      setTimeout(() => {
                        Ref[`lang${i}`].classList.toggle("opacity-100");
                        Ref[`lang${i}`].classList.toggle(
                          "!pointer-events-auto",
                        );
                      }, 1500);
                    }
                  }}
                  target={!Array.isArray(item.href) ? "_blank" : ""}
                  class="relative inline-flex h-8 w-8 touch-none items-center justify-center rounded-[--ellipse] [background:rgba(255,255,255,0.09)] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:all_0.3s_ease] hover:scale-110 hover:[background:transparent] hover:[border:0.0625rem_solid_var(--border)]"
                >
                  <img class="h-[0.7rem]" src={item.img} alt={item.alt} />
                  {Array.isArray(item.href) ? (
                    <div
                      ref={`lang${i}`}
                      class="pointer-events-none absolute left-0 top-[-5px] flex items-center justify-between gap-[0.625rem] rounded-[--borderR] bg-[#3b2d4a] px-[0.625rem] py-[0.3125rem] opacity-0 [transform:translate(-30%,-100%)] [transition:all_0.2s_ease-in-out]"
                    >
                      {item.href.map((item) => {
                        return (
                          <a
                            href={item.href}
                            target="_blank"
                            onclick={(e) => {
                              e.stopPropagation();
                              Fn.link(e);
                            }}
                            class="text-[--white]"
                          >
                            {item.lang}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
