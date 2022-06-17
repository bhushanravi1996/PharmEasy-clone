import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { Box, Form, Input, Label, DIV } from "./PaymentStyles";
export const Payment=()=> {
  let total = localStorage.getItem("total");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
    window.location.reload();
  };
  return (
    <>
 
    <DIV>
      <div class="row">
        <div class="col-md-8 mb-2">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Billing details</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="row mb-2">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form7Example1">First name</label>
                      <input type="text" id="form7Example1" class="form-control" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form7Example2">Last name</label>
                      <input type="text" id="form7Example2" class="form-control" />
                    </div>
                  </div>
                </div>

          
                <div class="form-outline mb-2">
                  <label class="form-label" for="form7Example4">Address</label>
                  <input type="text" id="form7Example4" class="form-control" />
                </div>

          
                <div class="form-outline mb-2">
                  <label class="form-label" for="form7Example5">Email</label>
                  <input type="email" id="form7Example5" class="form-control" />
                </div>

              
                <div class="form-outline mb-2">
                  <label class="form-label" for="form7Example6">Phone</label>
                  <input type="number" id="form7Example6" class="form-control" />
                </div>

          
          
              </form>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products amount
                  <span>{total}</span>
                </li>
                {/* <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li> */}
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total Amount</strong>
                    <strong>
                      {/* <p class="mb-0">(including VAT)</p> */}
                    </strong>
                  </div>
                  <span><strong>{total}</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DIV>
    <Box>
      <Form onSubmit={(e)=>e.preventDefault()}>
        <h3>Enter Card Details</h3>
        <div className="Pay-nav-bar"></div>
        <div className="all">
          <Label >Card Number</Label>
          <Input
            required
            classNameName="Pay-input"
            type="number"
            placeholder="Enter Card Number"
            maxLength="9"
          />
        </div>
        <div>
          <Label>Expiry Date</Label>
          <div className="all" id="Paydatediv">
            <Input
              classNameName="Pay-input"
              type="text"
              placeholder="MM"
              maxLength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
              required
            />
            <p id="Payslash">/</p>
            <Input
              classNameName="Pay-input"
              type="text"
              placeholder="YY"
              maxLength="2"
              oninput="this.value=this.value.replace(/[^00-99]/g,'');"
              required
            />
          </div>
        </div>

        <div className="all">
          <Label >CVV</Label>
          <Input
            classNameName="Pay-input"
            type="text"
            placeholder="•••"
            maxLength="3"
            onInput="this.value=this.value.replace(/[^000-999]/g,'');"
            required
          />
        </div>

        <div className="all">
          <Label>Name</Label>
          <Input
            classNameName="Pay-input"
            type="text"
            placeholder="Enter Cardholder's Full Name"
            required
          />
        </div>
        <Input style={{backgroundColor:"blue",color:"white"}}
          classNameName="Pay-input"
          onClick={handleClick}
          type="submit"
          value="PAY NOW"
          required
        />
      </Form>
    </Box>
  </>    
  )
  }