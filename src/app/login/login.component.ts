import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  schema;
  constructor() {}

  Joi = require("joi");
  schema = Joi.object()
    .keys({
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      access_token: [Joi.string(), Joi.number()],

      email: Joi.string().email({ minDomainAtoms: 2 })
    })
    .with("username")
    .without("password", "access_token");
}
