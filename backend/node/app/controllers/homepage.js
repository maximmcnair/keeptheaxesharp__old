var fs = require('fs')
  , path = require('path');

module.exports = function (app) {

  // function createUserObject(githubUser){
  //   var userObject =
  //     { id: githubUser.id
  //     , username: githubUser.username
  //     , name: githubUser.displayName
  //     , email: githubUser.emails[0].value
  //   };
  //   return userObject;
  // }

  /*
   * Views
  */
  app.get('*', function(req, res){
    var html = fs.readFileSync(path.join(__dirname, '/../../views/index.html'), 'utf8');

    // Create user object
    var user =
      { str: null
      , obj: null
    };

    if(req.user){
      user.str = JSON.stringify( req.user );
      user.obj = req.user;
    }

    // Render user object
    html = html.replace('{{user}}', user.str );

    res.send(html);
  });

};
