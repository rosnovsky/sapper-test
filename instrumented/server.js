var cov_jqf1m4vws = function () {
  var path = "/home/blackops/code/learning/sapper/src/server.js";
  var hash = "9c9c8344c44932c8b899aa44a87e8c0c0d4639f8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/blackops/code/learning/sapper/src/server.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 6,
          column: 38
        }
      },
      "1": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "2": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 17,
          column: 4
        }
      },
      "3": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "4": {
        start: {
          line: 16,
          column: 11
        },
        end: {
          line: 16,
          column: 37
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 15
          },
          end: {
            line: 15,
            column: 16
          }
        },
        loc: {
          start: {
            line: 15,
            column: 22
          },
          end: {
            line: 17,
            column: 2
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 37
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 37
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 37
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9c9c8344c44932c8b899aa44a87e8c0c0d4639f8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const {
  PORT,
  NODE_ENV
} = (cov_jqf1m4vws.s[0]++, process.env);
const dev = (cov_jqf1m4vws.s[1]++, NODE_ENV === 'development');
cov_jqf1m4vws.s[2]++;
polka() // You can also use Express
.use(compression({
  threshold: 0
}), sirv('static', {
  dev
}), sapper.middleware()).listen(PORT, err => {
  cov_jqf1m4vws.f[0]++;
  cov_jqf1m4vws.s[3]++;

  if (err) {
    cov_jqf1m4vws.b[0][0]++;
    cov_jqf1m4vws.s[4]++;
    console.log('error', err);
  } else {
    cov_jqf1m4vws.b[0][1]++;
  }
});