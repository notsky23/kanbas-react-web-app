import React from "react";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";

const ConditionalOutput = () => {
 return(
   <>
        <h2>Conditional Output</h2>
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
   </>
 );
};

export default ConditionalOutput;