import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

export default function () {
  return (
    <div class="wrapper flex w-full flex-col items-center justify-between gap-4 overflow-hidden px-2 @600:flex-row [&_div]:h-[200px] [&_div]:w-full @600:[&_div]:h-[300px] @600:[&_div]:w-1/3">
      <div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/LZw2czyjlvc?si=gGWAibvEb0tM0YHO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tt2fz3cvVks?si=7azgykFAWKpg_yal"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_AnifpIwLks?si=01QS21RyEbds0hhU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
