type Props = {
  reservations: any;
};

export function Reservations({ reservations }: Props) {
  return (
    <div className="reservations">
      <h2>Here are all the Reservations for you!</h2>
      <ul className="reservations-list">
        {reservations.map((reservation: any) => (
          <li key={reservation.id}>
            <h3>{reservation.restaurant.name}</h3>
            <p>{reservation.date}</p>
            <p>{reservation.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
