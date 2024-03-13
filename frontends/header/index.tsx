import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  // front.Variable.$el.body.addEventListener("click", (e) => {
  //   !e.target.closest(".header") ? (Static.active = false) : null;
  // });
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
