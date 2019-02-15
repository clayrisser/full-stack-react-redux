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
    const finaldata = _.filter(this.props.postActions, userObj => {
      const title = userObj.title;
      const body = userObj.body;
      const titleSet = title.split(" ");
      const bodySet = body.split(" ");
      const totalSet = [...titleSet, ...bodySet];
      let count = 0;
      _.map(totalSet, postTitle => {
        if (postTitle === this.state.searchPost) {
          count++;
        }
      });
      return count;
    });
    this.setState({
      filterData: finaldata
    });
  }

  handleChangeText(e) {
    this.setState(
      {
        searchPost: e.target.value
      },
      () => {
        this.getFilterData();
      }
    );
  }

  render() {
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
          {this.state.filterData.length ? (
            this.state.filterData.map((post, key) => {
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
