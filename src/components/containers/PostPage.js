import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/postActions";
import PostDetails from "../PostDetails";
import _ from "lodash";

export class PostPage extends React.Component {
  state = {
    searchPost: "",
    filterData: []
  };

  componentDidMount() {
    this.props.actions.loadPostActions();
  }

  getFilterData() {
    if (!this.state.searchPost.length) return this.props.postActions;
    return _.filter(this.props.postActions, userObj => {
      return (userObj.body + userObj.title).indexOf(this.state.searchPost) > -1;
    });
  }

  handleChangeText(e) {
    this.setState({
      searchPost: e.target.value
    });
  }

  render() {
    const filterData = this.getFilterData();
    return (
      <div>
        <p>Welcome to posts page</p>
        <input
          value={this.state.searchPost}
          className="myInput"
          type="text"
          placeholder="Search.."
          onChange={this.handleChangeText.bind(this)}
        />
        <div className="grid-style">
          {filterData.length ? (
            filterData.map((post, key) => {
              return <PostDetails key={key} postDetails={post} />;
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

PostPage.propTypes = {
  actions: PropTypes.object.isRequired,
  postActions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    postActions: state.postActions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
