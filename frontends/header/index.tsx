import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.active = false;
  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
