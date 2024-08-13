const Card = ({ library }) => {
    return (
      <div className="library-cards">
        <h3>{library.name}</h3>
        <p>{library.author}</p>
      </div>
    );
  };
  
  export default Card;
  