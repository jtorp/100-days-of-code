import s from "./hello-world.module.scss";

export default function HelloWorld() {
  return (
    <div className={s.hello}>
      Hello World, I am being styled using SCSS Modules!
    </div>
  );
}
