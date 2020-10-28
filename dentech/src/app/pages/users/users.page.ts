import { Component, OnInit } from "@angular/core";
import { User } from "../../interfaces/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
})
export class UsersPage implements OnInit {
  public userLogin: User = {};

  constructor() {}

  ngOnInit() {}
}
