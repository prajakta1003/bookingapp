import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMNWUCwT-S9mxH5dnz2lsywA28OZfIE-HGg&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMNWUCwT-S9mxH5dnz2lsywA28OZfIE-HGg&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMNWUCwT-S9mxH5dnz2lsywA28OZfIE-HGg&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>

            </div>
        </div>
    </div>
  );
}
