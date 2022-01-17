import button from "./Button.module.scss";

const Button = ({ text, bgColor, color, icon }) => {
  return (
    <button
      className={`${button.btn} ${text ? `${button.text_btn}` : ""}`}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
    >
      {text ? <p>{text}</p> : ""}
      {icon ? icon : ""}
    </button>
  );
};
export default Button;
