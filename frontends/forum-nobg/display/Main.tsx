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
  return (
    <div>
      {/* <Intro /> */}
      {/* <Info /> */}
      <div class="wrapper wrapper_padding relative z-[2]">
        {/* <Images /> */}
        {/* <Speakers /> */}
        {/* <Stend /> */}
        <a href="hhttps://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/">
          youtube
        </a>
        <Guests />
        {/* <Opportunities /> */}
      </div>

      {/* <Theme /> */}

      {/* <Partners /> */}

      {/* <Destination /> */}
    </div>
  );
}
