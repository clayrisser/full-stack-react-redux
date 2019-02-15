import React from "react";
import PropTypes from "prop-types";
import "../styles/about-page.css";

// Since this component is simple and static, there's no parent container for it.
const UserDetails = props => {
  const {
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company
  } = props.userDetails;
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <div className="display-content">
          <div>
            <span>{id})</span>
          </div>
          <div style={{ padding: "20px" }}>
            <div className="display-content">
              <span className="user-details">Name:</span>
              <span>{name}</span>
            </div>
            <div className="display-content">
              <span className="user-details">User Name:</span>
              <span>{username}</span>
            </div>
            <div className="display-content">
              <span className="user-details">Email:</span>
              <span>{email}</span>
            </div>
            <div className="display-content">
              <div>
                <span className="user-details">Address:</span>
              </div>
              <div>
                <div className="display-content">
                  <span className="user-details">Street:</span>
                  <span>{address.street}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">Suite:</span>
                  <span>{address.suite}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">City:</span>
                  <span>{address.city}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">Zipcode:</span>
                  <span>{address.zipcode}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">Geo:</span>
                  <div>
                    <div className="display-content">
                      <span className="user-details">Latitude:</span>
                      <span>{address.geo.lat}</span>
                    </div>
                    <div className="display-content">
                      <span className="user-details">Longitude:</span>
                      <span>{address.geo.lng}</span>
                    </div>
                  </div>
                </div>
                <div className="display-content">
                  <span className="user-details">Phone:</span>
                  <span>{phone}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">Website:</span>
                  <span>{website}</span>
                </div>
              </div>
            </div>
            <div className="display-content">
              <div>
                <span className="user-details">Company:</span>
              </div>
              <div>
                <div className="display-content">
                  <span className="user-details">Name:</span>
                  <span>{company.name}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">Catch Phrase:</span>
                  <span>{company.catchPhrase}</span>
                </div>
                <div className="display-content">
                  <span className="user-details">BS:</span>
                  <span>{company.bs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  userDetails: PropTypes.object
};

export default UserDetails;
