function Button(props) {
  return (
    <button className="button" onClick={props.genGif}>
      Generate random gif
    </button>
  );
}

export default Button;
