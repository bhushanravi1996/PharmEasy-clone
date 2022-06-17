import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Image } from "./SuccessStyles";

function Success() {
    const navigate = useNavigate()
  const handleClick = () => {
      navigate('/')
  }

    let id = Math.round(
    Math.random() * 3311000
  );

  return (
    <Box>
      <h2>Thank you for your purchase!</h2>
      <p>
        Your order id: <span id="order">{id}</span>
      </p>

      <Button onClick={handleClick}>Continue Shopping</Button>
    </Box>
  );
}

export default Success;
