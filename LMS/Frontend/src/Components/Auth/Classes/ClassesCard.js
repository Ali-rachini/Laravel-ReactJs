import React, {useEffect} from "react";
import {Grid} from "@mui/material";
import ClassCardItem from "./ClassCardItem";
import {FaPlusSquare} from "react-icons/fa";
import {SiGoogleclassroom} from "react-icons/si";
import "./ClassesCard.css";
import Button from "@mui/material/Button";
// import SectionCardItem from "../Sections/SectionCardItem";

const ClassesCard = ({
                         fetchClasses,
                         classes,
                         showAddClassFormPopup,
                         showEditClassFormPopup,
                         showDeleteClassFormPopup,
                         showViewClassFormPopup,
                     }) => {
    useEffect(() => {
        fetchClasses();
    }, []);

    // console.log(classes)

    return (
        <div className="classes">
            <div className="header">
                <h2>
          <span className="icon">
            <SiGoogleclassroom/>
          </span>
                    Class Management
                </h2>
                <Button
                    variant="contained"
                    className="btn add-btn"
                    onClick={showAddClassFormPopup}
                    color="success"
                >
                    <FaPlusSquare/>
                </Button>
            </div>
            <div className="class_cards_wrapper">
                <div className="card-wrapper">
                    {classes.map((item, index) => (
                        <ClassCardItem
                            key={item.id}
                            id={index + 1}
                            ClassName={item.ClassName}
                            singleClass={item}
                            showEditClassFormPopup={showEditClassFormPopup}
                            showDeleteClassFormPopup={showDeleteClassFormPopup}
                            showViewClassFormPopup={showViewClassFormPopup}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
