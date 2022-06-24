import "./styles.css";

const Card = () => {
  return (
    <div className="card-list">
      <div className="card-container">
        <img
          src="https://robohash.org/1?set=set2&size=180x180"
          alt="monsters"
        />
        <h2 className="monster-name">Monster Name</h2>
        <p className="monster-email">Monster Email</p>
      </div>
    </div>
  );
};
export default Card;
