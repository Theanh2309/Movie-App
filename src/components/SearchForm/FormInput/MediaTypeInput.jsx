const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        // name={name}
        value="movie" //Giá trị cố định của radio button này
        // onChange cập nhật giá trị cho form:
        // Khi người dùng chọn một radio button, hàm onChange sẽ gửi e.target.value (tức là "movie" hoặc "tv") đến hàm onChange.
        // onChange của component cha (thường là Controller hoặc logic quản lý form) sẽ cập nhật giá trị của value với e.target.value.

        onChange={(e) => onChange(e.target.value)} // Gửi giá trị "movie" khi được chọn
        checked={value === "movie"} // Được chọn nếu value hiện tại là "movie"
        id="sf-type-movie"
        className="mr-1"
      />
      <label htmlFor="sf-type-movie">Movie</label>
      <br />

      <input
        type="radio"
        // name={name}
        value="tv"
        checked={value === "tv"}
        onChange={(e) => onChange(e.target.value)}
        id="sf-type-tv"
        className="mr-1"
      />
      <label htmlFor="sf-type-tv">TV Show</label>
    </div>
  );
};
export default MediaTypeInput;
