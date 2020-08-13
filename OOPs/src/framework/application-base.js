import { TitleBar } from "../ui/title-bar.js";

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.TitleBar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }
  activateRoute(route) {
    let content = this.TitleBar.element.find(".page-content");
    content.empty(); //empty is jquery function

    this.routeMap[route].appendToElement(content); //append to home page directly
  }

  addRoute(id, pageObject, defaultRoute = false) {
    this.TitleBar.addlink(id, " ");
    this.addRoute["id"] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }

  show(element) {
    this.TitleBar.appendToElement(element);
    this.TitleBar.element.find(".md1-navigation__link").click((event) => {
      let route = event.target.innerHTML;
      this.activateRoute(route);
    });

    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }
}
