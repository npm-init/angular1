import template from './app.component.html';
import './app.component.css';

const AppComponent = {
  template,
  controllerAs: '$ctrl',
  controller: function () {
    this.name = "Allen Kim";
  }
};

export default AppComponent;
