import { Cemjsx, Func, Static, Fn } from "cemjs-all";
import menu from "@json/menu";

export default function () {
  return (
    <header class="header fixed left-0 top-0 z-10 h-[4.5rem] w-full bg-neutral-900 [border-bottom:1px_solid_#2D3243]">
      <div class="wrapper rela flex h-full items-center px-[0.625rem]">
        <nav
          class={[
            "navbar pointer-events-none absolute bottom-0 left-0 top-[72px] flex h-[300px] w-full flex-col items-center justify-evenly gap-3 bg-neutral-900 py-4 opacity-0 ring-0 [transform:translateY(calc(-100%_-_72px))] [transition:all_0.3s_ease-in-out] @700:pointer-events-auto @700:relative @700:top-0 @700:h-full @700:flex-row @700:gap-0 @700:py-0 @700:opacity-100 @700:[transform:translateY(0)]",
            Static.active
              ? "!pointer-events-auto !opacity-100 ![transform:translateY(0)]"
              : null,
          ]}
        >
          {menu.map((item) => {
            return (
              <a
                onclick={() => (Static.active = false)}
                ontouchstart={() => (Static.active = false)}
                href={item.link}
                class="cursor-pointer whitespace-nowrap rounded-[0.875rem] p-[0.3125rem_0.9375rem] text-[0.75rem] [background:--greenGradient] [border:0.4px_solid_var(--green)] [transition:all_1s_ease] @700:block @1000:p-[0.625rem_1.5625rem]"
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <div
          onclick={(e) => {
            e.stopPropagation();
            Static.active = !Static.active;
          }}
          ontouchstart={(e) => {
            e.stopPropagation();
            Static.active = !Static.active;
          }}
          class={[
            "group ml-auto mr-3 w-[32px] cursor-pointer space-y-2 *:pointer-events-none *:[transition:all_0.4s_ease] @700:hidden [&.active_.first]:translate-y-[10px] [&.active_.first]:-rotate-45 [&.active_.second]:opacity-0 [&.active_.third]:translate-y-[-10px] [&.active_.third]:rotate-45",
            Static.active ? "active" : null,
          ]}
        >
          <span class="first block h-0.5 w-8 bg-white"></span>
          <span class="second block h-0.5 w-8 bg-white"></span>
          <span class="third block h-0.5 w-8 bg-white"></span>
        </div>
      </div>
    </header>
  );
}
