import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import networking from "@svg/forum/networking.svg";
import communication from "@svg/forum/communication.svg";
import innovation from "@svg/forum/innovation.svg";
import inspiration from "@svg/forum/inspiration.svg";
import education from "@svg/forum/education.svg";
import crypto_emergency from "@svg/forum/crypto_emergency.svg";
import greenLine from "@svg/forum/greenLine.svg";
import Intro from "./Intro";
import Info from "./Info";
import Opportunities from "./Opportunities";
import Confidence from "./Confidence";
import Images from "./Images";
import Speakers from "./Speakers";
import Stend from "./Stend";
import Guests from "./Guests";
import Theme from "./Theme";
import Partners from "./Partners";
import Destination from "./Destination";

interface Course {
  _id: string;
  nameCoin: string;
  currentCourse: number;
  change: number;
}

export default function () {
  console.log('=74b3f2=', "Hello world new!")
  return (
    <div
      class={`before:![back[background-position:top_2227px_left,top_2057px_left_calc(100%),bottom_1500px_left_calc(100%_+_100px),bottom_0_center] relative ![background:url(/contents/background/dotsBg.png)_no-repeat_top_926px_left_calc(50%_+_570px)/1200px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-full before:content-[''] before:![background-size:20%_auto,50%_auto,300px_auto,contain] before:[background:url(/contents/forum/bgImage1-BWHMVFCJ.png)_no-repeat_top_5319px_left_0/300px_auto,_url(/contents/forum/bgImage2-RPDKL7S4.png)_no-repeat_top_4819px_right_0/860px_auto,_url(/contents/forum/bgImage3-CHPTAVEA.png)_no-repeat_top_9392px_right_0/300px_auto,_url(/contents/forum/bgImage4-4GEYHI22.png)_no-repeat_bottom_0_center/101%_auto] after:absolute after:left-[50%] after:right-0 after:top-[-2.5%] after:z-0 after:h-[6%] after:w-full after:max-w-[120rem] after:bg-cover after:bg-top after:bg-no-repeat after:content-[''] after:![background-image:url(/contents/background/greenLine.svg)] after:[transform:translateX(-50%)] @464:after:top-[-1.3%] after:@550:top-[0%] @767:before:![background-position:top_4056px_left,top_5356px_right,bottom_1500px_left_calc(100%_+_50px),bottom_0_center] @767:before:![background-size:20%_auto,380px_auto,300px_auto,contain] after:@767:top-0 after:@767:h-[10%] @1000:before:![background-position:top_3774px_left,top_3474px_right,bottom_2124px_left_calc(100%_+_50px),bottom_0_center] @1000:before:![background-size:20%_auto,500px_auto,300px_auto,contain] @1280:before:![background-position:top_3893px_left_calc(0%),top_3243px_left_calc(100%),bottom_1700px_left_calc(100%),bottom_0_center] after:@2000:h-[1040px]`}
    >
      <Intro />
      <Info />
      <div class="wrapper wrapper_padding relative z-[2]">
        <Confidence />
        <Images />
        <Speakers />
        {/* <Stend /> */}
        <Guests />
        <Opportunities />
      </div>

      <Theme />

      <Partners />

      <Destination />
    </div>
  );
}
