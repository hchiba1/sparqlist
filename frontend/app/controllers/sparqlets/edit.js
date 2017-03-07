import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(code) {
      const model = this.get('model');
      model.set('src', code);
      model.save().then((model) => {
        this.transitionToRoute('sparqlets.show', model);
      }).catch((err) => {
        this.set('error', err);
        console.error(err);
      });
    }
  }
});
