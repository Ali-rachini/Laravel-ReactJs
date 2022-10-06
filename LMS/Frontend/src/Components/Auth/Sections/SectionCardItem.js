import React, {useState} from 'react';
import './SectionsCard.css'
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import Button from "@mui/material/Button";

const SectionCardItem = ({
                             ClassName,
                             SectionName,
                             singleSection,
                             showEditSectionFormPopup,
                             showDeleteSectionFormPopup,
                             showViewSectionFormPopup,
                         }) => {


    return (
        <div className="container-cards">
            <div className="box">
                <div className="section_name" style={{cursor: "pointer"}}>{SectionName}</div>
                <div className="class_name" style={{color:"gray",fontSize:"0.8rem"}}>{ClassName}</div>
                <div className="btns">
                    <Button className="edit point" variant="contained" style={{backgroundColor: "#68217a"}}
                            onClick={() => showEditSectionFormPopup(singleSection)}>
                        <FaEdit size='1.2rem' color='white'/>
                    </Button>
                    <Button className="trash point" variant="contained" style={{backgroundColor: "#0f6e68"}}
                            onClick={() => showDeleteSectionFormPopup(singleSection)}>
                        <FaTrashAlt size='1.2rem' color='white'/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SectionCardItem;
