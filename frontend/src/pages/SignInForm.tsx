import { Bussines } from "../components/Bussines";
import Header from "../components/Header";
import "./SignInForm.css"

export function SignInForm(){
    return(
        <>
        <Bussines />
        <Header />
        <div className="fun-section">
            <h2>We will continue to make this journey unforgettable for you!</h2>
          </div>
        <div className="signin-form">
            <h2>Welcome back!</h2>
            <p>Please log in</p>
            <div className="form-container">
        <form
          className="form-section"
        >
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="sign-in-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
        </div>
        </>
    )
}