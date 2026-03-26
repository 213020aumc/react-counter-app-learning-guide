import "../../index.css";

const Button = ({ onClick, children, type = "btn" }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {children}
    </button>
  );
};

export default Button;
