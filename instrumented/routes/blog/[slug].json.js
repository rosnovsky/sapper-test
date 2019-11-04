var cov_gz7bosrsz = function () {
  var path = "/home/blackops/code/learning/sapper/src/routes/blog/[slug].json.js";
  var hash = "2df46ad44104318c9eecea7eaad110ecb3ce8c93";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/blackops/code/learning/sapper/src/routes/blog/[slug].json.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 24
        }
      },
      "1": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 1
        },
        end: {
          line: 5,
          column: 45
        }
      },
      "3": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 28
        }
      },
      "4": {
        start: {
          line: 13,
          column: 1
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "5": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "6": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 28
        }
      },
      "7": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "8": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 26,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 14
          },
          end: {
            line: 4,
            column: 15
          }
        },
        loc: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "get",
        decl: {
          start: {
            line: 8,
            column: 16
          },
          end: {
            line: 8,
            column: 19
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 27,
            column: 2
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 27,
            column: 2
          }
        }, {
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 27,
            column: 2
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2df46ad44104318c9eecea7eaad110ecb3ce8c93"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import posts from './_posts.js';
const lookup = (cov_gz7bosrsz.s[0]++, new Map());
cov_gz7bosrsz.s[1]++;
posts.forEach(post => {
  cov_gz7bosrsz.f[0]++;
  cov_gz7bosrsz.s[2]++;
  lookup.set(post.slug, JSON.stringify(post));
});
export function get(req, res, next) {
  cov_gz7bosrsz.f[1]++;
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const {
    slug
  } = (cov_gz7bosrsz.s[3]++, req.params);
  cov_gz7bosrsz.s[4]++;

  if (lookup.has(slug)) {
    cov_gz7bosrsz.b[0][0]++;
    cov_gz7bosrsz.s[5]++;
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    cov_gz7bosrsz.s[6]++;
    res.end(lookup.get(slug));
  } else {
    cov_gz7bosrsz.b[0][1]++;
    cov_gz7bosrsz.s[7]++;
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    cov_gz7bosrsz.s[8]++;
    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}