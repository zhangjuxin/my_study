"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var create;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      create =
      /*#__PURE__*/
      function () {
        function create() {
          _classCallCheck(this, create);
        }

        _createClass(create, [{
          key: "fn",
          value: function fn() {
            console.log('🐘es6初始化');
            var promise = new Promise(function (resolve, reject) {// ... some code
            });
          }
        }]);

        return create;
      }();

      _export("default", create);
    }
  };
});
"use strict";

System.register([], function (_export2, _context2) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      System.register([], function (_export, _context) {
        "use strict";

        var create;

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        return {
          setters: [],
          execute: function execute() {
            create =
            /*#__PURE__*/
            function () {
              function create() {
                _classCallCheck(this, create);
              }

              _createClass(create, [{
                key: "fn",
                value: function fn() {
                  console.log('🐘es6初始化');
                  var promise = new Promise(function (resolve, reject) {// ... some code
                  });
                }
              }]);

              return create;
            }();

            _export("default", create);
          }
        };
      });
    }
  };
});
"use strict";

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      console.log(1233);
    }
  };
});
