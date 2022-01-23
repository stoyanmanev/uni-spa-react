import React from "react";

export default function League({ options }) {
  function getOptions() {
    return options.map((option, i) => {
      return (
        <option key={option.competition} value={option.competition}>{option.competition}</option>
      );
    });
  }

  return (
    getOptions()
  );
}
