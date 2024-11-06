import React, { useState } from "react";

function SignUp() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input type="password" placeholder="Password" name="password" />
        </div>
        <div>
          <button type="submit">Sign Up</button>
          <p>Already have account</p>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
