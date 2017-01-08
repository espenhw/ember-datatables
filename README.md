# ember-datatables

[![Build Status](https://travis-ci.org/mfcollins3/ember-datatables.svg?branch=master)](https://travis-ci.org/mfcollins3/ember-datatables)

## Current Status

The ember-datatables addon works, but it under very active development
and is still early in the project. The current version is published
for use in my projects, and for the use of other early adopters in
order to gain feedback. If it works for you in its current
state and you are happy with how it is working, you are welcome to use
it in your production applications or in-development applications. I
will happily provide support, bug fixes, and new features for you if
you ask. This addon is not feature complete, but I will be adding new
features freqently until I have most capabilities of the DataTables
control implemented. Please use the Issues page to report bugs or
feature requests.

This project will be "stable" at version 1.0.0.

## Overview

ember-datatables is an [Ember](http://emberjs.com) addon that
introduces the `data-table` component for Ember applications.
`data-table` uses the [DataTables](https://datatables.net) library to
add advanced rendering functionality for HTML tables.

## Installing the ember-datatables Addon

To use the ember-datatables addon in your Ember application, you first
need to install it. This can be done using [Ember CLI](https://ember-cli.com):

    ember install ember-datatables

Ember CLI will install the ember-datatables addon and will add the
dependency reference to it to your application's `package.json` file.

Installing the ember-datatables addon will also install the following
Bower components into your application:

* [datatables.net](https://github.com/DataTables/Dist-DataTables)
* [datatables.net-dt](https://github.com/DataTables/Dist-DataTables-DataTables)
* [datatables.net-plugins](https://github.com/DataTables/Plugins)

In addition, ember-datatables depends on the [ember-moment](https://www.npmjs.com/package/ember-moment)
addon which will also add the [Moment.js](http://momentjs.com) library
to your Ember application.

## Using the ember-datatables Addon

The ember-datatables addon introduces the `data-table` component into
your Ember application. `data-table` will render an HTML `table`
element containing the data that you pass into the table. Table data
can be specified in two ways:

* embedded HTML table elements (`tr`, `th`, `td`) inside of `thead`,
  `tbody`, and `tfoot` elements;
* Ember Data models that are loaded from the store

### HTML Table Example

To render data inside of a table, you can place the HTML table markup
inside of the `data-table` component:

```html
{{#data-table}}
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edhinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
  </tbody>
{{/data-table}}
```

**NOTE:** The sample data and HTML markup were copied from the
[Zero Configuration](https://datatables.net/examples/basic_init/zero_configuration.html)
example on the DataTables website.

### Ember Data Example

The `data-table` component can be bound to Ember Data models. The Dummy
application in the repository demonstrates this using
[ember-cli-mirage](http://www.ember-cli-mirage.com) as a mock web API
that serves the model data.

For example, assume that I have the following model named `employee`:

```js
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  position: DS.attr('string'),
  office: DS.attr('string'),
  age: DS.attr('number'),
  extension: DS.attr('string'),
  startDate: DS.attr('date'),
  salary: DS.attr('number'),

  name: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
```

I would then implement my route to load all of the employees from my
web API:

```js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('employee');
  }
});
```

In my template, I can then use the `data-table` component to render an
HTML table listing the employee records. In my example, I am using the
[ember-array-helper](https://github.com/kellyselden/ember-array-helper)
addon to describe arrays in the template markup.

```html
{{data-table data=model
             columns=(array
               (hash title="Name" property="name")
               (hash title="Position" property="position")
               (hash title="Office" property="office")
               (hash title="Age" property="age")
               (hash title="Start date" property="startDate")
               (hash title="Salary" property="salary")
             )}}
```

### Data Renderer Helpers

If you try the above example, you'll notice that the start date column
is rendered as a full date/time string. Because I'm in Arizona, I see
date strings look like this:

    Thu Nov 27 2008 17:00:00 GMT-0700 (MST)

I want something friendlier. I just want to display the date without
the time and formatted such as "Jan 8, 2017". To do this, I can use
the `datetime-renderer` helper to attach a custom data renderer to the
start date column of my table and pass it the format string to use for
rendering dates:

```html
{{data-table data=model
             columns=(array
               (hash title="Name" property="name")
               (hash title="Position" property="position")
               (hash title="Office" property="office")
               (hash title="Age" property="age")
               (hash title="Start date" property="startDate" render=(datetime-renderer "MMM D YYYY"))
               (hash title="Salary" property="salary")
             )}}
```

Then the table formats, I can now see the start date formatted
correctly.

The following data renderer helpers are defined:

* [datetime-renderer](https://datatables.net/plug-ins/dataRender/datetime)

## Contributing to ember-datatables

I will happily accept contributions, bug fixes, and new features from
the community. Please submit pull requests on a separate branch if you
wish to contribute.

### Creating a Development Workspace

* `git clone https://github.com/mfcollins3/ember-datatables.git`
* `cd ember-datatables`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
