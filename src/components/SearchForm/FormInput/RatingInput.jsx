const RatingInput = ({ onChange }) => {
  return (
    <div>
      <select
        className="rounded border"
        onChange={(e) => onChange(e.target.value)} // gọi onChange khi lựa chọn thay đổi
      >
        <option value="all">All</option>
        <option value="0-49">0 - 49</option>
        <option value="50-69">50 - 69</option>
        <option value="70-100">70 - 100</option>
      </select>
    </div>
  );
};
export default RatingInput;
