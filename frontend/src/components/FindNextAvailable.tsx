type Props = {
  setSeeAvailableDates: React.Dispatch<React.SetStateAction<boolean>>;
};
export function FindNextAvailable({ setSeeAvailableDates }: Props) {
  function getStringFromDate(date: Date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dateNo = date.getDate();
    let year = date.getFullYear();

    return `${day}, ${month} ${dateNo}, ${year}`;
  }

  return (
    <div className="available-dates-modal__wrapper">
      <div className="available-dates-modal__container">
        <div className="modal__top">
          <h1 className="modal__restaurants-name">Restaurant's name</h1>
          <button
            className="modal__close-button"
            onClick={() => {
              setSeeAvailableDates(false);
            }}
          >
            ✖
          </button>
        </div>
        <div className="modal__next-available-dates">
          <h2 className="next-available-dates__title"> Next available dates</h2>
          <div className="day">
            <h3 className="date">{getStringFromDate(new Date())}</h3>
            <div className="times">
              <button className="time">4:00 PM</button>
              <button className="time">4:15 PM</button>
              <button className="time">4:30 PM</button>
              <button className="time">4:45 PM</button>
              <button className="time">5:00 PM</button>
            </div>
          </div>
          <div className="day">
            <h3 className="date">
              {getStringFromDate(new Date(Date.now() + 3600 * 1000 * 24))}
            </h3>
            <div className="times">
              <button className="time">4:00 PM</button>
              <button className="time">4:15 PM</button>
              <button className="time">4:30 PM</button>
              <button className="time">4:45 PM</button>
              <button className="time">5:00 PM</button>
            </div>
          </div>{" "}
          <div className="day">
            <h3 className="date">
              {getStringFromDate(new Date(Date.now() + 2 * 3600 * 1000 * 24))}
            </h3>
            <div className="times">
              <button className="time">4:00 PM</button>
              <button className="time">4:15 PM</button>
              <button className="time">4:30 PM</button>
              <button className="time">4:45 PM</button>
              <button className="time">5:00 PM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
