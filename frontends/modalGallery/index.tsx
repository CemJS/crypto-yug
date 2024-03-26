import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  setTimeout(() => {
    Ref.modalWindow.classList.add("activeModal");
    Static.body.classList.add("activeModal");
    Static.body.style.overflow = "hidden";
    front.Variable.$el.body.classList.add("pointer-events-none");
  }, 100);
  return;
};

front.func.close = () => {
  setTimeout(() => {
    Ref.modalWindow.classList.add("hidden");
    Fn.clearData();
    front.Variable.$el.body.classList.remove("activeModal");
    front.Variable.$el.body.style.overflow = "auto";
    front.Variable.$el.body.classList.remove("pointer-events-none");
  }, 5);
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.body = document.querySelector("body");
  return;
};

front.display = () => {
  return (
    <div>
      <header class="modal-header">
        <button class="btn btn_dark" onpointerup={Func.close}>
          <i class="i i-cancel"></i>
        </button>
      </header>
      <Navigation />
    </div>
  );
};

export { front };
