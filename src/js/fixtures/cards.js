let cards =
  [ { front: '// Iterate through object properties\n\nvar obj =\n  { name: \"Pete\"\n  , age: \"20\"\n  }'
    , back: 'for (var property in object) {\n  \t// check property is not inherited from\n    // the base object class\n    if (object.hasOwnProperty(property)) {\n        // do stuff\n    }\n}'
    , tags: ['javascript']
    }
  , { front: '// find all mongo documents'
    , back: 'db.collection.find(query)'
    , tags: ['mongodb']
    }
  , { front: '// remove document by id'
    , back: 'db.collection.remove(\n  {\"_id\": ObjectId(\"554a383d1546362208759bc6\")}\n)'
    , tags: ['mongodb']
    }
  , { front: '// Remove specific item from an array by index'
    , back: 'var ary = [\'a\', \'b\', \'c\']\n\nary.splice(index, 1)'
    , tags: ['javascript']
    }
  ];

export default cards;