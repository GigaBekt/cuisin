import button from "./Button.module.scss";

const Button = ({ text, bgColor, color, icon, padding }) => {
  return (
    <button
      className={`${button.btn} ${text ? `${button.text_btn}` : ""}`}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        padding: `${padding}`,
      }}
    >
      {text ? <p>{text}</p> : ""}
      {icon ? icon : ""}
    </button>
  );
};
export default Button;
