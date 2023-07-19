import React, { useState } from "react";
import "../collapsible/_index.scss"

import arrowUp from "../../assets/arrow_up.svg"

const Collapsible = ({ label, content, contentTag: ContentTag = 'p' }) => {
  const [open, setOpen] = useState(false);
  // const ContentComponent = ContentTag;

  const toggle = () => {
    setOpen(!open);
  };

  const collapsibleContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <p className="collapsibleTab__content--li" key={index}>
          {item}
        </p>
      ));
    } else {
      return (
        <p className="collapsibleTab__content--p">{content}</p>
      );
    }
  };

  return (
    <div className="collapsibleTab">
      <button onClick={toggle} className="collapsibleTab__label">{label}
      <img className={`collapsibleTab__title--arrow rotate-animation reverse-animation ${open ? "opened" : "closed"}`}
      src={arrowUp} alt="flèche vers le haut" />
      </button>
      {open && (
        <div className="collapsibleTab__content">
          {content && collapsibleContent()}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
