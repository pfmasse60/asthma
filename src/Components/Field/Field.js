import React from 'react';

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px', 
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

// class Field extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//     <div>
//       <label style={labelStyle} >{this.label}</label>
//       <input type={this.type} style={inputStyle} />
//     </div>
//   );
//     }
// };


  const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
  });

export default Field