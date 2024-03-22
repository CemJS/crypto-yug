import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import { DisplaySchedule } from "@elements/GallerySchedule";
import { DisplayImages } from "@elements/GalleryForumImages";

export default function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onpointerup={(e) => {
        if (e.target === Ref.modalBody) {
          Func.close();
        }
      }}
    >
      <svg
        onpointerdown={Func.close}
        id="close"
        class="absolute right-4 top-4 h-14 w-14 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {/* <button
        onclick={Func.close}
        id="close"
        class="absolute right-4 top-4 text-[5rem]"
      >
        x
      </button> */}
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content modalWindow_content_gallery px-[35px]">
          <main class="modalWindow_main w-full">
            <div class="modalGallery_carousel">
              {Static.schedule ? (
                <DisplaySchedule slide={Static.schedule} />
              ) : null}
              {Static.images ? (
                <DisplayImages
                  items={Static.images}
                  slide={Static.imagesSlide}
                />
              ) : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
