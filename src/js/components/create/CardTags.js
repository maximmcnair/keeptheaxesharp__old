var React = require('react/addons');
var TagsInput = require('react-tagsinput');

var CardTags = React.createClass({
  displayName: 'TagsComponent',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      tags: this.props.tags
    };
  },

  change: function (tags) {
    this.setState({
      tags: tags
    });
    this.props.updateTags(tags);
  },

  render: function () {
    return (
      <div>
        <TagsInput
          ref="tags"
          value={this.state.tags}
          onChange={this.change}
          onChangeInput={this.complete}
          addOnBlur={false}
          placeholder="Tags"
        />
      </div>
    );
  }
});

export default CardTags;
