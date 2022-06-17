import React from 'react'
import { getData } from '../Redux/Products/Action'
import { useDispatch, useSelector } from 'react-redux'
import { ProdCategory } from "./ProdCategory";
import styled from 'styled-components'

import { ControlledCarousel1 } from '../components/HealthSlider';
const StyledProdList = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
  
    margin:20px 10%`
export const HealthCareProducts = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.getDataReducer);
    React.useEffect(() => {
        getData(dispatch)
    }, [dispatch])
    return (
        <div>
            <ControlledCarousel1/>
            <StyledProdList>
                {data.map((item) => {
                    return <ProdCategory key={item.id} item={item} />
                })}
            </StyledProdList>
        </div>
    )
}

