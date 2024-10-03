/* eslint-disable react/prop-types */

const Button = ({ children, onHandle }) => {
  return (
    <div>
      <button onClick={onHandle}>{children}</button>
    </div>
  );
};

export default Button;
