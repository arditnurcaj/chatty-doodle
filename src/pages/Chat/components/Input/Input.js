import { forwardRef } from "react";

import StyledInput from "./Input.styles";

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
