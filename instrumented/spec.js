var cov_275kabpzyv = function () {
  var path = "/home/blackops/code/learning/sapper/cypress/integration/spec.js";
  var hash = "a83b12a39efe61bd7489e62627623ee09c9c4a5c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/blackops/code/learning/sapper/cypress/integration/spec.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "1": {
        start: {
          line: 2,
          column: 1
        },
        end: {
          line: 4,
          column: 4
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 15
        }
      },
      "3": {
        start: {
          line: 6,
          column: 1
        },
        end: {
          line: 8,
          column: 4
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 37
        }
      },
      "5": {
        start: {
          line: 10,
          column: 1
        },
        end: {
          line: 13,
          column: 4
        }
      },
      "6": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 44
        }
      },
      "7": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 39
        }
      },
      "8": {
        start: {
          line: 15,
          column: 1
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "9": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 43
        }
      },
      "10": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 32
          },
          end: {
            line: 1,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1,
            column: 38
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 2,
            column: 12
          },
          end: {
            line: 2,
            column: 13
          }
        },
        loc: {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 4,
            column: 2
          }
        },
        line: 2
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 6,
            column: 28
          },
          end: {
            line: 6,
            column: 29
          }
        },
        loc: {
          start: {
            line: 6,
            column: 34
          },
          end: {
            line: 8,
            column: 2
          }
        },
        line: 6
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 28
          }
        },
        loc: {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 13,
            column: 2
          }
        },
        line: 10
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 15,
            column: 27
          }
        },
        loc: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 18,
            column: 2
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a83b12a39efe61bd7489e62627623ee09c9c4a5c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_275kabpzyv.s[0]++;
describe('Sapper template app', () => {
  cov_275kabpzyv.f[0]++;
  cov_275kabpzyv.s[1]++;
  beforeEach(() => {
    cov_275kabpzyv.f[1]++;
    cov_275kabpzyv.s[2]++;
    cy.visit('/');
  });
  cov_275kabpzyv.s[3]++;
  it('has the correct <h1>', () => {
    cov_275kabpzyv.f[2]++;
    cov_275kabpzyv.s[4]++;
    cy.contains('h1', 'Great success!');
  });
  cov_275kabpzyv.s[5]++;
  it('navigates to /about', () => {
    cov_275kabpzyv.f[3]++;
    cov_275kabpzyv.s[6]++;
    cy.get('nav a').contains('about').click();
    cov_275kabpzyv.s[7]++;
    cy.url().should('include', '/about');
  });
  cov_275kabpzyv.s[8]++;
  it('navigates to /blog', () => {
    cov_275kabpzyv.f[4]++;
    cov_275kabpzyv.s[9]++;
    cy.get('nav a').contains('blog').click();
    cov_275kabpzyv.s[10]++;
    cy.url().should('include', '/blog');
  });
});