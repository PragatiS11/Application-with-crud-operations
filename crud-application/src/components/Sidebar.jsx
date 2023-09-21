import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialGender = searchParams.getAll("gender");
  let initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [gender, setGender] = useState(initialGender || []);
  const [order , setOrder] = useState( initialOrder || "");


  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order = order)

    setSearchParams(params);
  }, [category, gender ,order]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newcategory = [...category];
    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }

    setCategory(newcategory);
  };

  const handleGender = (e) => {
    const { value } = e.target;
    let genders = [...gender];
    if (genders.includes(value)) {
      genders = genders.filter((el) => el !== value);
    } else {
      genders.push(value);
    }
    setGender(genders);
    //  console.log(genders);
  };


const handleOrder = (e)=>{
  const {value} = e.target;
  setOrder(value)
} 
  return (
    <StyledSidebar>
        <StyledHeading>Filter and Sort</StyledHeading>
        <StyledSection>
        <StyledSubheading>Filter by category</StyledSubheading>
      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"top-wear"}
          onChange={handleCategory}
          checked={category.includes("top-wear")}
        />
        Top Wear
      </StyledCheckboxLabel>
      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"bottom-wear"}
          onChange={handleCategory}
          checked={category.includes("bottom-wear")}
        />
        Bottom Wear
      </StyledCheckboxLabel>
      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"foot-wear"}
          onChange={handleCategory}
          checked={category.includes("foot-wear")}
        />
        Foot Wear
      </StyledCheckboxLabel>
        </StyledSection>
     

      <StyledSection>

      <StyledSubheading>Filter by Gender</StyledSubheading>

      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        Men
      </StyledCheckboxLabel>
      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        Women
      </StyledCheckboxLabel>
      <StyledCheckboxLabel>
        <StyledCheckbox
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        Kids
      </StyledCheckboxLabel>
      </StyledSection>
      <StyledSection>
      <StyledSubheading>Sort by Price</StyledSubheading>
      <div onChange={handleOrder}>
      <StyledRadioLabel>
          <StyledRadio type="radio" name= "order" value={""} defaultChecked={order=== ""}/>
           Default
        </StyledRadioLabel>
        <StyledRadioLabel>
          <StyledRadio type="radio" name= "order" value={"asc"} defaultChecked={order=== "asc"}/>
          Ascending
        </StyledRadioLabel>
        <StyledRadioLabel>
          <StyledRadio type="radio" name= "order" value = {"desc"} defaultChecked={order=== "desc"}/>
          Descending
        </StyledRadioLabel>
      </div>
      </StyledSection>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-right: 2px solid #ccc;
  min-height: 80vh;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledSection = styled.div`
  margin-bottom: 20px;
`;

const StyledSubheading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledCheckbox = styled.input`
  margin-right: 5px;
`;

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledRadio = styled.input`
  margin-right: 5px;
`;


export default Sidebar;
