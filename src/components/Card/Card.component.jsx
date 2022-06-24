import "./styles.css";

const Card = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <div className="card-container" key={monster.id}>
          <img
            src={`https://robohash.org/${monster.id}set=set2&size=180x180`}
            alt="monsters"
          />
          <h2 className="monster-name">{monster.name}</h2>
          <p className="monster-email">{monster.email}</p>
        </div>
      ))}
    </div>
  );
};
export default Card;
