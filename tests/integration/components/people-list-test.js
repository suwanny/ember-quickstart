import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | people-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set("model", ["Marie Curie", "Mae Jemison"]);
    await render(hbs`{{people-list title="Title" people=model}}`);

    const textContent = this.element.textContent.trim();
    // assert.equal(this.element.textContent.trim(), 'Title');
    assert.ok(textContent.includes('Title'));
    assert.ok(textContent.includes("Marie Curie"));
    assert.ok(textContent.includes("Mae Jemison"));
  });
});
