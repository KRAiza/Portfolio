import React from 'react';
import "./typography.scss"

const Typography = ({label,fontFamily ,fontSize}) => {
  console.log(fontFamily)
  return (
    <div style={{fontFamily:fontFamily, fontSize:fontSize}}>
      {label}
    </div>
  );
};

export default Typography;