import FightersView from "./fightersView";
import { fighterService } from "./services/fightersService";

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById("root") as HTMLElement;
  static loadingElement = document.getElementById(
    "loading-overlay"
  ) as HTMLElement;

  async startApp(): Promise<void> {
    try {
      App.loadingElement.style.visibility = "visible";

      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);
      const fightersElement = fightersView.element;
      App.rootElement.appendChild(fightersElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.visibility = "hidden";
    }
  }
}

export default App;
