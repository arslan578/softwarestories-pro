import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TagsWidget = () => {
  return (
    <>
      <div className="widget widget-tag-cloud">
        <h3 className="widget-title">Tags</h3>
        <div className="tags">
          <Link to="#">Web Development</Link>
          <Link to="#">App Development</Link>
          <Link to="#">Cybersecurity</Link>
          <Link to="#">Digital Marketing</Link>
          <Link to="#">SEO Optimization</Link>
          <Link to="#">UI/UX Design</Link>
          <Link to="#">E-Commerce Solutions</Link>
          <Link to="#">Consulting</Link>
          <Link to="#">Portfolio</Link>
        </div>
      </div>
    </>
  );
};

export default TagsWidget;
