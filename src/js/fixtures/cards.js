let cards =
  [ { front: '```javascript\n// Iterate through object properties\n\nvar obj =\n  { name: \"Pete\"\n  , age: \"20\"\n  }\n```'
    , back: '```javascript\nfor (var property in object) {\n  \t// check property is not inherited from\n    // the base object class\n    if (object.hasOwnProperty(property)) {\n        // do stuff\n    }\n}\n```'
    , tags: ['javascript']
    , _id: '123'
    }
  , { front: '```javascript\n// find all mongo documents\n```'
    , back: '```javascript\ndb.collection.find(query)\n```'
    , tags: ['mongodb']
    , _id: '1234'
    }
  , { front: '```javascript\n// remove document by id\n```'
    , back: '```javascript\ndb.collection.remove(\n  {\"_id\": ObjectId(\"554a383d1546362208759bc6\")}\n)\n```'
    , tags: ['mongodb']
    , _id: '12345'
    }
  , { front: '```javascript\n// Remove specific item from an array by index\n```'
    , back: '```javascript\nvar ary = [\'a\', \'b\', \'c\']\n\nary.splice(index, 1)\n```'
    , tags: ['javascript']
    , _id: '123456'
    }
  ];

export default cards;
