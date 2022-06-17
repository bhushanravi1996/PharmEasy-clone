import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Navbar.module.css"
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const handlSignup = ()=>{
    navigate("/Signup")
  }
  const handlHome=()=>{
    navigate("/");
  }
  const count = useSelector(state=>state.cartCountReducer.count);
  const login = useSelector(state=>state.loginState.showlogin);
  return (
    <div className={Styles.navbar}>
      <div className={Styles.container_navbar}>
          <img
            className={Styles.main_logo}
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt="logo"
            onClick={()=>handlHome()}
          ></img>
        <div className={Styles.inputBox}>
          <input
            className={Styles.pincode}
            type="type"
            placeholder="Select Pincode"
            pattern="[0-9]{6}"
            maxLength={6}
          ></input>
          <div className={Styles.straightbar}></div>
          <input
            className={Styles.searchbar}
            type="text"
            placeholder="Search Medicines/Healthcare products"
          />
        </div>
      </div>

      <div className={Styles.Container2_navbar}>
        <div className={Styles.navbar_products}>
          <p className={Styles.products_line}>Order Medicines</p>
          <Link
            to="healthcare-products"
            className={Styles.products_line}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className={Styles.products_line}>Healthcare Products</p>
          </Link>
          <p className={Styles.products_line}>Lab Tests</p>
          <p className={Styles.products_line}>RTPCR</p>
        </div>
        <div className={Styles.navbar_products2}>
          <div className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg"
              alt="offers"
            />
            <p className={Styles.specialLine}>Offers</p>
          </div>
          <div className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg"
              alt="login"
            />
             <div className="navPay_login" onClick={()=>handlSignup()}>                      
              <p className={Styles.specialLine} >{login?"Logout":"Login"}</p>
             </div>
          </div>
          <div onClick={()=>{navigate("/cart")}} className={Styles.products_line}>
            <img
              className={Styles.side_logo}
              src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg"
              alt="cart"
            />
            <p>{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar