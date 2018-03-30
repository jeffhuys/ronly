const ronly = require('./ronly')
const assert = require('assert')

const runTests = () => {
  // Test ronly
  const aa          = '1', ab = {lal: 'lol', lok: 'lak'}, b = '2', c = '3'

  const obj0        = { aa, b, c }
  test(ronly(obj0, 'aa, b'),  { aa, b })
  test(ronly(obj0, 'aa b'),   { aa, b })
  test(ronly(obj0, 'aa b c'), { aa, b, c })

  const obj1        = { test: { aa, ab, b }, c}
  test(ronly(obj1, 'test'),             { test: { aa, ab, b } })
  test(ronly(obj1, 'test.aa'),          { test: { aa } })
  test(ronly(obj1, 'test.ab'),          { test: { ab } })
  test(ronly(obj1, 'test.aa, test.ab'), { test: { aa, ab } })
  test(ronly(obj1, 'test.ab.lal'),      { test: { ab: { lal: 'lol' } } })

  // The mother of all tests :D
  test(ronly({
    user: {
      firstName: 'John',
      lastName: 'Doe',
      role: 'Admin'
    },
    session: {
      loggedIn: true,
      lastLogin: '10/11/92'
    },
    a: {
      very: {
        deeply: {
          nested: {
            object: ', this is'
          }
        }
      }
    }
  }, 'user.firstName, session.loggedIn, a.very.deeply.nested.object'), {
    user: {
      firstName:'John'
    },
    session: {
      loggedIn: true
    },
    a: {
      very: {
        deeply: {
          nested: {
            object: ', this is'
          }
        }
      }
    }
  })
}

runTests()

function test(val, exp) {
  process.stdout.write(`${JSON.stringify(val)}\n${JSON.stringify(exp)}\n`)
  try {
    assert.deepEqual(val, exp)
    console.log('✅')
  } catch (e) {
    console.log('🚫  TEST FAILED')
    console.log('Expected:')
    console.error(e.expected)
    console.log('Actual:')
    console.error(e.actual)
    process.exit(-1)
  }
}
