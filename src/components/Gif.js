function Gif({ randomGif }) {
  //no gif at first
  if (randomGif === null) {
    return (
      <h3 className="gif">Click the button above to generate a random gif!</h3>
    );
  }
  return (
    <div className="gif">
      <img src={randomGif.data.images.fixed_height.url} />
    </div>
  );
}

export default Gif;
