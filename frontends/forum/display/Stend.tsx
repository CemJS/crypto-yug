import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import stendsB1B9 from "@json/forum/stends/stendsB1B9";
import stendsB10B14 from "@json/forum/stends/stendsB10B14";
import stendsA1A3 from "@json/forum/stends/stendsA1A3";
import stendsA4A6 from "@json/forum/stends/stendsA4A6";

const RenderPopup = ({ type, img }) => {
  return (
    <div
      id="popup"
      class="pointer-events-none relative z-10 h-full w-full opacity-0"
    >
      <div class="absolute bottom-0 left-[50%] flex min-h-[40px] translate-x-[-50%] translate-y-[calc(100%_+_5px)] flex-nowrap items-center gap-2 rounded-[5px] bg-slate-600 p-4">
        {/* {type == "sold" && img ? (
          <img
            class="max-w-[40px]"
            src="/contents/forum/partners/partner4.png"
            alt=""
          />
        ) : null} */}

        <span class="text-nowrap text-[0.7rem]">
          {type == "sold" ? "Это место продано" : "Свободно"}
        </span>
      </div>
    </div>
  );
};

const RenderBigPopup = () => {
  return (
    <div
      id="popup"
      class="pointer-events-none absolute left-1/2 top-1/2 flex min-h-[40px] translate-x-[-50%] translate-y-[calc(-50%)] flex-col flex-nowrap items-center justify-center gap-2 overflow-hidden rounded-[5px] bg-slate-600 pb-2 opacity-0"
    >
      <img
        class="w-full max-w-[300px] object-cover"
        src="/contents/scene.png"
        alt=""
      />

      <span class="text-nowrap text-[0.9rem]">Сцена</span>
    </div>
  );
};

const RenderB1B9 = ({ item, index }) => {
  return (
    <div
      style={`left:${25 + 5.85 * index}%;`}
      class={[
        "absolute top-[11.4%] h-[7.7%] w-[3.65%] cursor-pointer  [&:hover_#popup]:opacity-100",
        item.type == "sold"
          ? `border-[2px] border-solid border-fuchsia-600`
          : null,
      ]}
    >
      <RenderPopup type={item?.type} img={item?.img} />
    </div>
  );
};

const RenderB10B14 = ({ item, index }) => {
  return (
    <div
      style={`top:${34 + 10.45 * index}%;`}
      class={[
        "absolute right-[16%] h-[6.5%] w-[4.4%] cursor-pointer  [&:hover_#popup]:opacity-100",
        item.type == "sold"
          ? `border-[2px] border-solid border-fuchsia-600`
          : null,
      ]}
    >
      <RenderPopup type={item?.type} img={item?.img} />
    </div>
  );
};

const RenderA1A3 = ({ item, index }) => {
  return (
    <div
      style={`left:${38.3 + 10 * index}%;`}
      class={[
        "absolute top-[33%] h-[5.7%] w-[7.6%] cursor-pointer  [&:hover_#popup]:opacity-100",
        item.type == "sold"
          ? `border-[2px] border-solid border-fuchsia-600`
          : null,
      ]}
    >
      <RenderPopup type={item?.type} img={item?.img} />
    </div>
  );
};

const RenderA4A6 = ({ item, index }) => {
  return (
    <div
      style={`top:${45 + 17.7 * index}%;`}
      class={[
        "absolute right-[27.3%] h-[13.9%] w-[3.2%] cursor-pointer  [&:hover_#popup]:opacity-100",
        item.type == "sold"
          ? `border-[2px] border-solid border-fuchsia-600`
          : null,
      ]}
    >
      <RenderPopup type={item?.type} img={item?.img} />
    </div>
  );
};

const RenderScene = () => {
  return (
    <div>
      <div
        class={[
          "absolute bottom-0 left-[50.2%] h-[7%] w-[20.5%] translate-x-[-50%] cursor-pointer  [&:hover+#popup]:opacity-100",
        ]}
      ></div>
      <RenderBigPopup />
    </div>
  );
};

export default function () {
  return (
    <section id="stends" class="relative z-[2]">
      <h2 class="mb-10 text-center text-[clamp(1.5rem,4vw,5.625rem)] font-bold @767:mb-12">
        Стенды
      </h2>
      <div class="relative [&_#popup]:[transition:all_0.3s_ease]">
        <img src="/contents/forum/stend.png" alt="" />
        {stendsB1B9.map((item: any, index: number) => {
          return <RenderB1B9 item={item} index={index} />;
        })}
        {stendsB10B14.map((item: any, index: number) => {
          return <RenderB10B14 item={item} index={index} />;
        })}
        {stendsA1A3.map((item: any, index: number) => {
          return <RenderA1A3 item={item} index={index} />;
        })}

        {stendsA4A6.map((item: any, index: number) => {
          return <RenderA4A6 item={item} index={index} />;
        })}
        <RenderScene />
      </div>
    </section>
  );
}
