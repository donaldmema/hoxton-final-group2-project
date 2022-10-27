import { DefaultContext } from "react-icons";

export function Search() {
  return (
    <div className="search-table">
      <h1>Find your table for any occasion</h1>
      <form className="search-form">
        <input type="date" min={new Date().toISOString().split("T")[0]}></input>
        <select id="time" name="time">
          <option value="1">2:30 PM</option>
          <option value="2">3:00 PM</option>
          <option value="3">3:30 PM</option>
          <option value="4">4:00 PM</option>
          <option value="5">4:30 PM</option>
          <option value="6">5:00 PM</option>
          <option value="7">5:30 PM</option>
        </select>
        <select id="people" name="people">
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
          <option value="7">7 people</option>
          <option value="7">8 people</option>
          <option value="7">9 people</option>
          <option value="7">10 people</option>
          <option value="7">Larger Party</option>
        </select>
        <input placeholder="Location, Restaurant, or Cuisine"></input>
        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}
