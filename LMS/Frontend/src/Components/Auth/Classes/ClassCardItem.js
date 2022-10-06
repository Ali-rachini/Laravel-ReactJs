import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import {FaEdit, FaTrashAlt} from "react-icons/fa";

const ClassCardItem = ({
                           id,
                           ClassName,
                           singleClass,
                           showEditClassFormPopup,
                           showDeleteClassFormPopup,
                           showViewClassFormPopup,
                       }) => {

    // console.log(ClassName)

    return (
        <div className="container-cards">
            <div className="box">
                <div className="class-name" style={{cursor: "pointer"}}
                     onClick={() => showViewClassFormPopup(ClassName)}>{ClassName}</div>
                <div className="btns">
                    <Button className="edit point" variant="contained"
                            onClick={() => showEditClassFormPopup(singleClass)}
                            style={{backgroundColor: "#68217a"}}>
                        <FaEdit/>
                    </Button>
                    <Button className="trash point" variant="contained"
                            onClick={() => showDeleteClassFormPopup(singleClass)}
                            style={{backgroundColor: "#0f6e68"}}>
                        <FaTrashAlt/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ClassCardItem;
