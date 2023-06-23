import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Operation() {
  const {operation} = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));
  const result = isNaN(x) || isNaN(y) ? 'Invalid arguments' : getResult(operation, x, y);

  return (
    <div>
      {result}
    </div>
  );
};

function getResult(operation, x, y) {
  if(operation === "add") {
    return x + y;
  }

  if(operation === "sub") {
    return x - y;
  }

  if(operation === "mul") {
    return x * y;
  }

  if(operation === "div") {
    return x / y;
  }

  return "Not supported operation";
}