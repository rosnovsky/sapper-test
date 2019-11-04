var cov_2rhbljznaf = function () {
  var path = "/home/blackops/code/learning/sapper/src/client.js";
  var hash = "edbf8c7bd8045f43c6f2240684cb0946b6f56285";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/blackops/code/learning/sapper/src/client.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 5,
          column: 3
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "edbf8c7bd8045f43c6f2240684cb0946b6f56285"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import * as sapper from '@sapper/app';
cov_2rhbljznaf.s[0]++;
sapper.start({
  target: document.querySelector('#sapper')
});