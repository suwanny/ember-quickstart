import Route from '@ember/routing/route';
import EmberObject, { computed } from "@ember/object";

const FooObject = EmberObject.extend({
  baz: undefined,
  something: computed("baz.{foo,bar}", function() {
    return `${this.get("baz.foo")} ${this.get("baz.bar")}`;
  })
});

export default Route.extend({
  model() {
    const obj = FooObject.create({
      baz: { foo: "BLAMMO", bar: "BLAZORZ" }
    });

    setTimeout(() => {
      obj.set('baz.bar', 'Changed ====== New BAR .... ')
    }, 3000);

    return { output: "This is initial output", obj };
  }
});
