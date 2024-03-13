import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import { DisplayImages } from "@elements/ImagesForumSlider";
import images from "@json/forum/forumImages";

export default function () {
  return (
    <div class="mb-[4.75rem]">
      <DisplayImages
        items={images?.map((item: any) => {
          return (
            <div class="gallery_slide">
              <img
                onclick={() => {
                  Fn.initOne("modalGallery", {
                    images: images,
                  });
                }}
                ref="slide"
                class="max-h-[18.75rem] !min-h-[auto] max-w-[31.25rem] rounded-[0.8125rem]"
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
    </div>
  );
}
