var assert = require('assert')
var ronly  = require('../ronly')

describe('ronly', function() {
  var objectToTest = {
    topLevelOne: 'hello',
    topLevelTwo: {
      nestedOne: {
        nestedOneOne: 'hello'
      },
      nestedTwo: {
        nestedTwoOne: 'hello again',
        nestedTwoTwo: {
          nestedTwoTwoOne: {
            test: 'works?'
          }
        }
      }
    }
  }

  var userObjectToTest = {
    user: {
      name: 'Jeff',
      lastName: 'Huys',
      email: 'jeff@notarealemail.com',
      age: 25
    },
    skills: [
      'javascript',
      'typescript',
      'devops',
      'php',
      'etc'			
    ],
    createdAt: '2018-06-12',
    updatedAt: '2018-06-15'
  }

  it('should return the top-level object', function() {
    assert.deepEqual(
      ronly(objectToTest, 'topLevelOne'),
      { topLevelOne: 'hello' }
    )
  })

  it('should return a nested object using dot notation', function() {
    assert.deepEqual(
      ronly(objectToTest, 'topLevelTwo.nestedOne'),
      { topLevelTwo: { nestedOne: { nestedOneOne: 'hello' } } }
    )
  })

  it('should return a deeply nested object using dot notation', function() {
    assert.deepEqual(
      ronly(objectToTest, 'topLevelTwo.nestedTwo.nestedTwoTwo.nestedTwoTwoOne'),
      { topLevelTwo: { nestedTwo: { nestedTwoTwo: { nestedTwoTwoOne: { test: 'works?' } } } } }
    )
  })

  it('should return multiple (nested) objects using a space-delimited string', function() {
    assert.deepEqual(
      ronly(userObjectToTest, 'user.name user.lastName user.age skills'),
      { user: { name: 'Jeff', lastName: 'Huys', age: 25 },
      skills: [ 'javascript', 'typescript', 'devops', 'php', 'etc' ] }
    )
  })

  it('should return multiple (nested) objects using a comma-delimited string', function() {
    assert.deepEqual(
      ronly(userObjectToTest, 'user.name, user.lastName     ,  user.age      ,skills'),
      { user: { name: 'Jeff', lastName: 'Huys', age: 25 },
      skills: [ 'javascript', 'typescript', 'devops', 'php', 'etc' ] }
    )
  })

  it('should return multiple (nested) objects using an array of strings', function() {
    assert.deepEqual(
      ronly(userObjectToTest, ['user.name', 'user.lastName', 'user.age', 'skills']),
      { user: { name: 'Jeff', lastName: 'Huys', age: 25 },
      skills: [ 'javascript', 'typescript', 'devops', 'php', 'etc' ] }
    )
  })
})
