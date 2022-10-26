import JoinUs from "../components/ JoinUs"
import { Bussines } from "../components/Bussines"
import Header from "../components/Header"
import "./SignUpForm.css"
export function SignUpForm(){
    return(
        <>
        <Bussines />
        <Header />
        <div className="signup-page">
        <JoinUs/>
        <div className="sign-up-form-container">
        <h2>Create your account</h2>
        <h4>
          Signing up as <span> </span>
          <a href="/signin"> (not you?)</a>
        </h4>
        <form
          className="sign-up-form-section"
        >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            id="name"
            required
          />
          <label htmlFor="password">
            Password <span>*</span> <br />
            <p>Use at least 8 characters</p>
          </label>

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />

          <p>
            By creating an account or logging in, you understand and agree to
            GjejeVet's <a href="">Terms</a>. You also acknowledge our{" "}
            <a href="">Cookies</a> and <a href="">Privacy</a> policies.
          </p>

          <button className="sign-up-btn" type="submit">
            Create account
          </button>
        </form>
      </div>
      </div>
        </>
    )
}