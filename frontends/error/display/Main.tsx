import { Cemjsx, Fn, Func, Static } from "cemjs-all";

export default function () {
  return (
    <div class="error_wrap">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
      >
        Youtube
      </a>
      <div class="!bg-clip-text [background:--greenGradient]">
        <a
          class="text-transparent"
          target="_blank"
          href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
        >
          Youtube
        </a>
      </div>

      <a
        class="cursor-pointer"
        target="_blank"
        href="https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/"
      >
        Youtube cursor-pointer
      </a>
      <p class="error_text">Страница не найдена</p>
      <h1 class="error_title">Error 404</h1>
      <p class="error_subtitle">Вернитесь на главную страницу</p>
      <a href="/" onpointerup={Fn.link} class="btn btn_timing">
        <span>На главную</span>
      </a>
    </div>
  );
}
