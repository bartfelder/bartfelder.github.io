import React from "react";
import PropTypes from "prop-types";
import InfoCard from "../InfoCard/InfoCard";
import InfoGroupHeader from "../InfoGroupHeader/InfoGroupHeader";
import uuid4 from "uuid4";
import "./InfoGroup.css";

function InfoGroup({ groupTitle, groupContents }) {
  return (
    <section className="InfoGroup-container">
      <InfoGroupHeader groupTitle={groupTitle} />
      <div className="InfoGroup-content">
        {groupContents.map((content) => (
          <InfoCard {...content} key={uuid4()} />
        ))}
      </div>
    </section>
  );
}

InfoGroup.propTypes = {
  groupTitle: PropTypes.string,
  groupContents: PropTypes.array,
};

export default InfoGroup;
