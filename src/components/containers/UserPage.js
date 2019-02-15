import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/userActions";
import UserDetails from "../UserDetails";

export class UserPage extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.props.actions.loadUserActions();
  }

  render() {
    return (
      <div className="grid-style">
        {this.props.userActions.length ? (
          this.props.userActions.map((user, key) => {
            return <UserDetails key={key} userDetails={user} />;
          })
        ) : (
          <div />
        )}
      </div>
    );
  }
}

UserPage.propTypes = {
  actions: PropTypes.object.isRequired,
  userActions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    userActions: state.userActions
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
)(UserPage);
