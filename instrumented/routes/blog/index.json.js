var cov_28iaj89gci = function () {
  var path = "/home/blackops/code/learning/sapper/src/routes/blog/index.json.js";
  var hash = "03d1ff3d6c8a64c51e4b1443ef3435607a5818bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/blackops/code/learning/sapper/src/routes/blog/index.json.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 8,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 1
        },
        end: {
          line: 7,
          column: 3
        }
      },
      "2": {
        start: {
          line: 11,
          column: 1
        },
        end: {
          line: 13,
          column: 4
        }
      },
      "3": {
        start: {
          line: 15,
          column: 1
        },
        end: {
          line: 15,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 42
          },
          end: {
            line: 3,
            column: 43
          }
        },
        loc: {
          start: {
            line: 3,
            column: 50
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "get",
        decl: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 10,
            column: 19
          }
        },
        loc: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "03d1ff3d6c8a64c51e4b1443ef3435607a5818bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import posts from './_posts.js';
const contents = (cov_28iaj89gci.s[0]++, JSON.stringify(posts.map(post => {
  cov_28iaj89gci.f[0]++;
  cov_28iaj89gci.s[1]++;
  return {
    title: post.title,
    slug: post.slug
  };
})));
export function get(req, res) {
  cov_28iaj89gci.f[1]++;
  cov_28iaj89gci.s[2]++;
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  cov_28iaj89gci.s[3]++;
  res.end(contents);
}