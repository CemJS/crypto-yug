import { Cemjsx, Fn, Ref, Static, front } from "cemjs-all";
import { DisplayImages } from "@elements/ImagesForumSlider";
import images from "@json/forum/forumImages";

setTimeout(() => {
  Static.showImages = true;
}, 2000);

export default function () {
  let clickTimer;
  return (
    <div class="mb-[4.75rem]">
      {Static.showImages ? (
        <DisplayImages
          items={images?.map((item: any, index: number) => {
            return (
              <div
                onpointerdown={() => {
                  clickTimer = false;
                  setTimeout(() => {
                    clickTimer = true;
                  }, 100);
                }}
                onpointerup={() => {
                  !clickTimer
                    ? Fn.initOne("modalGallery", {
                        images: images,
                        imagesSlide: String(index),
                      })
                    : 0;
                }}
                class="gallery_slide cursor-pointer"
              >
                <img
                  ref="slide"
                  class="pointer-events-none max-h-[18.75rem] !min-h-[auto] max-w-[31.25rem] cursor-pointer rounded-[0.8125rem]"
                  src={`/contents/forum/images/${item?.image}`}
                  alt="img"
                  draggable="false"
                />
              </div>
            );
          })}
          buttons={false}
          dots={false}
        />
      ) : null}
    </div>
  );
}
