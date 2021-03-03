import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState("");
  useEffect(() => {
    axios
      .post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          parmas: {
            q: text,
            target: language.value,
            key: "",
          },
        }
      )
      .then(({ data }) => {
        setTranslate(data.translations[0].translatedText);
      });
  }, [language, text]);
  return <div className="ui header">{translate}</div>;
};

export default Convert;
