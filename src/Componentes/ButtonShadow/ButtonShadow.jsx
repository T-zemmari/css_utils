import './ButtonShadow.css';
const ButtonShadow = ({ buttonText, shadowStyle }) => {
  return (
    <button className="button-custom-class" style={{boxShadow:`${shadowStyle}`}}>
      {buttonText}
    </button>
  );
};

export default ButtonShadow;