import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
import { DisplaySchedule } from "@elements/GallerySchedule";
import { DisplayImages } from "@elements/GalleryForumImages";

export default function () {
  return (
    <div
      class="modalWindow"
      ref="modalWindow"
      onclick={(e) => {
        if (e.target === Ref.modalBody) {
          setTimeout(() => {
            Fn.clearData();
            front.Variable.$el.body.classList.remove("activeModal");
            front.Variable.$el.body.style.overflow = "auto";
          }, 5);
        }
      }}
    >
      <div class="modalWindow_body" ref="modalBody">
        <div class="modalWindow_content modalWindow_content_gallery @1280:!w-[70%] !w-full px-[35px]">
          <main class="modalWindow_main w-full">
            <div class="modalGallery_carousel">
              {Static.schedule ? (
                <DisplaySchedule items={Static.schedule} />
              ) : null}
              {Static.images ? <DisplayImages items={Static.images} /> : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
