var fs = require('fs')
  , path = require('path');

module.exports = function (app, options) {

  /*
   * Views
  */
  app.get('*', function(req, res){
    // Get index template
    var html = fs.readFileSync(path.join(__dirname, '/../../views/index.html'), 'utf8');

    // Create user object
    var user =
      { str: null
      // , obj: null
      };

    // Get latest user model rather than session
    if(req.user){
      options.connection.model('User').findById(req.user.id, function(error, document){
        if(!error){
          if(document){
            user.str = JSON.stringify( document );
            // user.obj = user;
          }

          // Render user object
          html = html.replace('{{user}}', user.str );

          res.send(html);
        }else{
          console.log(error);
        }
      })
    }else{
      // Render user object
      html = html.replace('{{user}}', user.str );
      res.send(html);
    }
  });

};
