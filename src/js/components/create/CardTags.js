var React = require('react/addons');
var TagsInput = require('react-tagsinput');

var langTags =
  [ 'Go'
  , 'Angular'
  , 'Node.js'
  , 'Javascript'
  , 'React'
  , 'ES2015'
  ];

var CardTags = React.createClass({
  displayName: 'TagsComponent',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      tags: this.props.tags
    , completions: []
    };
  },

  complete: function (value) {
    value = value.toLowerCase();

    if (value === '') {
      return this.setState({
        completions: []
      });
    }

    this.setState({
      completions: langTags.filter(function (comp) {
        var norm = comp.toLowerCase();
        return norm.substr(0, value.length) === value && this.state.tags.indexOf(comp) === -1;
      }.bind(this))
    });
  },

  transform: function (tag) {
    if (this.state.completions.indexOf(tag) > -1) {
      return tag;
    }

    if (this.state.completions.length === 1) {
      return this.state.completions[0];
    }
  },

  validate: function (tag) {
    return this.state.completions.indexOf(tag) > -1;
  },

  change: function (tags) {
    this.setState({
      tags: tags
    , completions: []
    });
    this.props.updateTags(tags);
  },

  render: function () {
    var completionNodes = this.state.completions.map(function (comp) {
      var add = function () {
        this.refs.tags.addTag(comp);
      }.bind(this);

      return (
        <span>
          <a className="president" onClick={add}>{comp}</a>
        </span>
      );
    }.bind(this));

    return (
      <div>
        <TagsInput
          ref="tags"
          value={this.state.tags}
          onChange={this.change}
          onChangeInput={this.complete}
          transform={this.transform}
          validate={this.validate}
          addOnBlur={false}
          placeholder="Tags"
        />
        {completionNodes}
      </div>
    );
  }
});

export default CardTags;
