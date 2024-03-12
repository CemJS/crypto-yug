import { Cemjsx, Func, Static, Fn } from "cemjs-all";
import menu from "@json/menu";

export default function () {
  return (
    <header class="fixed left-0 top-0 z-10 h-[4.5rem] w-full bg-neutral-900 [border-bottom:1px_solid_#2D3243]">
      <div class="wrapper flex h-full items-center px-[0.625rem]">
        <nav
          class={[
            "@700:flex @700:relative @700:top-0 @700:flex-row @700:gap-0 @700:pt-0 absolute bottom-0 left-0 top-[72px] hidden h-full w-full flex-col items-center justify-between gap-3 bg-neutral-900 pt-4 ring-0",
            Static.active ? "!flex" : null,
          ]}
        >
          {menu.map((item) => {
            return (
              <a
                href={item.link}
                class="@700:block @1000:p-[0.625rem_1.5625rem] cursor-pointer whitespace-nowrap rounded-[0.875rem] p-[0.3125rem_0.9375rem] text-[0.75rem] [background:--greenGradient] [transition:all_1s_ease]"
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <div
          onclick={(e) => {
            e.stopPropagation();
            e.target.classList.toggle("active");
            Static.active = !Static.active;
          }}
          class="@700:hidden group ml-auto mr-3 w-[32px] cursor-pointer space-y-2 *:pointer-events-none *:[transition:all_0.4s_ease] [&.active_.first]:translate-y-[10px] [&.active_.first]:-rotate-45 [&.active_.second]:opacity-0 [&.active_.third]:translate-y-[-10px] [&.active_.third]:rotate-45"
        >
          <span class="first block h-0.5 w-8 bg-white"></span>
          <span class="second block h-0.5 w-8 bg-white"></span>
          <span class="third block h-0.5 w-8 bg-white"></span>
        </div>
      </div>
    </header>
  );
}
