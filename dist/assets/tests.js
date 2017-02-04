'use strict';

define('dummy/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | app.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/components/example-list.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | components/example-list.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | helpers/destroy-app.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | helpers/module-for-acceptance.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | helpers/resolver.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | helpers/start-app.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/integration/components/data-table-test', ['exports', 'chai', 'mocha', 'ember-mocha'], function (exports, _chai, _mocha, _emberMocha) {

  (0, _mocha.describe)('Integration | Component | data table', function () {
    (0, _emberMocha.setupComponentTest)('data-table', {
      integration: true
    });

    (0, _mocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#data-table}}
      //     template content
      //   {{/data-table}}
      // `);

      this.render(Ember.HTMLBars.template({
        'id': 'BD7ziZcp',
        'block': '{"statements":[["text","\\n"],["block",["data-table"],null,null,0],["text","    "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","thead",[]],["flush-element"],["text","\\n          "],["open-element","tr",[]],["flush-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Name"],["close-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Position"],["close-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Office"],["close-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Age"],["close-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Start date"],["close-element"],["text","\\n            "],["open-element","th",[]],["flush-element"],["text","Salary"],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","tbody",[]],["flush-element"],["text","\\n          "],["open-element","tr",[]],["flush-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","Tiger Nixon"],["close-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","System Architect"],["close-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","Edinburgh"],["close-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","61"],["close-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","2011/04/25"],["close-element"],["text","\\n            "],["open-element","td",[]],["flush-element"],["text","$320,800"],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
        'meta': {}
      }));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('dummy/tests/integration/components/data-table-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | integration/components/data-table-test.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/models/employee.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | models/employee.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | resolver.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | router.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/complex-headers.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/complex-headers.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/default-ordering.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/default-ordering.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/feature-enable-disable.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/feature-enable-disable.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/hidden-columns.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/hidden-columns.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/index.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/multi-column-ordering.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/multi-column-ordering.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/examples/zero-configuration.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/examples/zero-configuration.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | routes/index.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-mocha'], function (exports, _dummyTestsHelpersResolver, _emberMocha) {

  (0, _emberMocha.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | test-helper.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
define('dummy/tests/unit/helpers/datetime-renderer-test', ['exports', 'mocha'], function (exports, _mocha) {
  //import { datetimeRenderer } from 'ember-datatables/helpers/datetime-renderer';

  (0, _mocha.describe)('Unit | Helper | datetime renderer', function () {
    // Replace this with your real tests.
    (0, _mocha.it)('works', function () {
      //let result = datetimeRenderer(['MMM D YYYY']);
      //expect(result).to.be.ok;
    });
  });
});
//import { expect } from 'chai';
define('dummy/tests/unit/helpers/datetime-renderer-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('JSHint | unit/helpers/datetime-renderer-test.js', function () {
    it('should pass jshint', function () {
      // precompiled test passed
    });
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
