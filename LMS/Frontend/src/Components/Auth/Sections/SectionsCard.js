import React, { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import "./SectionsCard.css";
import Button from "@mui/material/Button";
import { FaPlusSquare } from "react-icons/fa";
import SectionCardItem from "./SectionCardItem";

const SectionsCard = ({
    sections,
    showAddSectionFormPopup,
    showEditSectionFormPopup,
    showDeleteSectionFormPopup,
    showViewSectionFormPopup,
}) => {
    console.log(sections);
    return (
        <div className="sections">
            <div className="header">
                <h2>
                    <span className="icon">
                        <SiGoogleclassroom />
                    </span>
                    Sections Management
                </h2>
                <Button
                    variant="contained"
                    className="btn add-btn"
                    onClick={showAddSectionFormPopup}
                    color="success"
                >
                    <FaPlusSquare />
                </Button>
            </div>
            <div className="section_cards_wrapper">
                <div className="card-wrapper">
                    {sections.map((item) =>
                        <SectionCardItem
                            key={item.id}
                            SectionName={item.SectionName}
                            singleSection={item}
                            ClassName={item.ClassName}
                            showDeleteSectionFormPopup={showDeleteSectionFormPopup}
                            showEditSectionFormPopup={showEditSectionFormPopup}
                            showViewSectionFormPopup={showViewSectionFormPopup}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionsCard;
