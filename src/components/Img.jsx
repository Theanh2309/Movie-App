const Img = ({ src }) => {
  return (
    <img
      loading="lazy"
      className="w-full"
      src={src}
      srcSet={
        backdropPath
          ? `https://media.themoviedb.org/t/p/w220_and_h330_face${backdropPath} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${backdropPath} 2x`
          : defaultBackdropPath
      }
      // CLS web
      width={200}
      height={300}
    ></img>
  );
};
export default Img;
