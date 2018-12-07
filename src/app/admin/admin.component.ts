import { Component, OnInit } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {
  product$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.product$ = db.list("/product");
  }
  addRoute(product: HTMLInputElement) {
    this.product$.push(product.value);
    product.value = "";
  }
  updateProduct(products) {
    this.db
      .object("/product/" + products.$key)
      .set(products.$value + " Updated and Added to database");
  }
  delete(products) {
    this.db.object("/product/" + products.$key).remove();
  }
}
