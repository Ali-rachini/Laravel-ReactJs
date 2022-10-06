import React from 'react'
import { useState, useEffect } from "react";
import "./Reports.css"
import { FaUserGraduate } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiBlackBook } from 'react-icons/gi';
import { GiNotebook } from 'react-icons/gi';
import Reports from './Reports';
import BarChart from './BarChart';
import axios from 'axios';
function ReportsCards() {

    const [loadingClassCount, setLoadingClassCount] = useState(true);
    const [countClasses, setCountClasses] = useState([]);
    const [countAdmins, setCountAdmins] = useState([]);
    const [countSections, setCountSections] = useState([]);
    const [countStudents, setCountStudents] = useState([]);

    const countAdmin = async () => {
        setLoadingClassCount(true);
        await axios.get(`http://localhost:8000/api/countAdmin`)
        .then((res) => {
            setCountAdmins(res.data);
            setLoadingClassCount(false);
        })
    };

    const countSection = async () => {
        setLoadingClassCount(true);
        await axios.get(`http://localhost:8000/api/countSection`)
        .then((res) => {
            setCountSections(res.data);
            setLoadingClassCount(false);
        })
    };

    const countStudent = async () => {
        setLoadingClassCount(true);
        await axios.get(`http://localhost:8000/api/countStudents`)
        .then((res) => {
            setCountStudents(res.data);
            setLoadingClassCount(false);
        })
    };

    const countClass = async () => {
        setLoadingClassCount(true);
        await axios.get(`http://localhost:8000/api/countClass`)
        .then((res) => {
            setCountClasses(res.data);
            setLoadingClassCount(false);
        })
    };


    useEffect(() => {
        countClass();
        countAdmin();
        countSection();
        countStudent();

    }, [])

    console.log(countStudents.students);

    return (
        <div>

            <h3 className='i-name'>Dashboard</h3>

            <div className='values'>
                <div className='val-box'>
                    <FaUserGraduate className='icon_reports' />
                    <div>
                        <h3>{countStudents.students}</h3>
                        <span>Number of Students </span>
                    </div>
                </div>

                <div className='val-box'>
                    <GiBlackBook className='icon_reports' />
                    <div>
                        <h3>{countClasses.classes}</h3>
                        <span>Number of classes</span>
                    </div>
                </div>

                <div className='val-box'>
                    <GiNotebook className='icon_reports' />
                    <div>
                        <h3>{countSections.sections}</h3>
                        <span>Number of Sections</span>
                    </div>
                </div>

                <div className='val-box'>
                    <BsFillPeopleFill className='icon_reports' />
                    <div>
                        <h3>{countAdmins.admins}</h3>
                        <span>Number of Admins</span>
                    </div>
                </div>
            </div>
            <div className='flex-container'>
            <Reports className='flex-child magenta'/>
            <BarChart className='flex-child green'/>
            </div>
        </div>
    )
}

export default ReportsCards
