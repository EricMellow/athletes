import "./Athletes.scss"

type AthletesProps = { athletes: Array<TrainHeroic.User> };

export default function Athletes({ athletes }: AthletesProps) {
  let athleteCards: Array<object> = [];
  if (athletes.length) {
    athleteCards = athletes.map(athlete => {
      return (
        <div key={athlete.id} className="athlete-card">
          <img src={athlete.profilePhotoUrl} alt="Athlete profile" className="profile-picture"></img>
          <h3>{athlete.nameFirst} {athlete.nameLast}</h3>
        </div>
      );
    });
  }

  return (
    <div className="athlete-container">
      {athleteCards.length === 0 && <div className="no-athletes">
        We're sorry, but you don't currently have any athletes.
      </div>}
      {athleteCards.length >= 1 && athleteCards}
    </div>
  );
}