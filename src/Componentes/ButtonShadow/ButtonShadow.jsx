
const ButtonShadow = ({ buttonText, shadowStyle }) => {
  return (
    <button className="button" style={shadowStyle}>
      {buttonText}
    </button>
  );
};

export default ButtonShadow;