import React from 'react';
import './MatchingBtn.css';

function MatchingBtn() {
  return (
    <button className="MatchingBtn" data-text="Awesome">
      <span className="actual-text">&nbsp;Matching&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;Matching&nbsp;</span>
    </button>
  );
}

export default MatchingBtn;
