import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loginText = "Login";
  signUpText = "Sign Up";
  lessons = ["Lesson 1", "Lessons 2"];

  login() {
    console.log("Login");
  }

  signUp() {
    console.log("Sign Up");
  }
}
