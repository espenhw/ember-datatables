import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', function() {
    this.route('zero-configuration');
    this.route('feature-enable-disable');
    this.route('default-ordering');
    this.route('multi-column-ordering');
  });
});

export default Router;
