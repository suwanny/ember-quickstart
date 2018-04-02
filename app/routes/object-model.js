import Route from '@ember/routing/route';
import EmberObject, { computed } from "@ember/object";

const FooObject = EmberObject.extend({
  baz: undefined,
  something: computed("baz.{foo,bar}", function() {
    return `${this.get("baz.foo")} ${this.get("baz.bar")}`;
  })
});

const Person = EmberObject.extend({
  firstName: null,
  lastName: null,
  age: null,
  country: null,

  fullName: computed("firstName", "lastName", {
    get() {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    },
    set(key, value) {
      let [firstName, lastName] = value.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName',  lastName);
      return value;
    }
  }),

  description: computed("fullName", "age", "country", function() {
    return `${this.get(
      "fullName"
    )}; Age: ${this.get("age")}; Country: ${this.get("country")}`;
  })
});


export default Route.extend({
  model() {
    const obj = FooObject.create({
      baz: { foo: "BLAMMO", bar: "BLAZORZ" }
    });

    let captainAmerica = Person.create({
      firstName: 'Steve',
      lastName: 'Rogers',
      age: 80,
      country: 'USA'
    });

    setTimeout(() => {
      obj.set('baz.bar', 'Changed ====== New BAR .... ')
    }, 3000);

    return { output: "This is initial output", obj, captainAmerica };
  }
});
