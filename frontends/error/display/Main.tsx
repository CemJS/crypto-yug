import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import guests from "@json/forum/forumGuests";
import youtube from "@images/forum/youtube.svg";
import youtubeWhite from "@images/forum/youtube-white.svg";

export default function () {
  return (
    <div class="error_wrap text-center">
      <p class="error_text">Страница не найдена</p>
      <h1 class="error_title">Error 404</h1>
      <p class="error_subtitle">Вернитесь на главную страницу</p>
      <a href="/" onpointerup={Fn.link} class="btn btn_timing">
        <span>На главную</span>
      </a>
    </div>
  );
}
