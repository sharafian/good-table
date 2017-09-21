# Good Table
> format array of arrays as a table with no config

```
const table = require('good-table')
const formatted = table([
  [ 'Name', 'ID', 'Price' ],
  [ '----', '--', '-----' ],
  [ 'Thing 1', '10', '$100' ],
  [ 'Thing 2', '451', '$5000' ],
  [ 'Third Thing', '3', '$5' ]
])

console.log(formatted)
/*
Name         ID   Price
----         --   -----
Thing 1      10   $100 
Thing 2      451  $5000
Third Thing  3    $5   
*/
```

You can pass the number of spaces in padding as the
second argument if you want.
