# ronly - Recursive (nested) only  
[![CircleCI](https://circleci.com/gh/jeffhuys/ronly/tree/master.svg?style=svg)](https://circleci.com/gh/jeffhuys/ronly/tree/master)  
Return whitelisted paths of an object.

I took the effort to make this module as compatible as possible with older versions of Javascript. Please open an issue if you encounter any problems.

Contributions more than welcome!

### Installation
```
$ npm install ronly
```

### API
An array or space/comma-delimited string may be given. Use dot notation to access deeply nested properties:

```
var obj = {
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

var user = ronly(obj, 'user.name user.lastName user.age skills')
```

Returns:

```
{
	user: {
		name: 'Jeff',
		lastName: 'Huys',
		age: 25 
	},
	skills: [ 'javascript', 'typescript', 'devops', 'php', 'etc' ]
}
```

### License

(The MIT License)

Copyright (c) 2018 JR Huijsmans <jeffhuys@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

