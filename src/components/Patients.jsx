import {useLocation} from "react-router-dom";
import {PatientService} from '../utils/api';
import {useState,useEffect} from 'react';
import PatientList from "./PatientsList";

const Patients =()=>{
    const location = useLocation();
    const [patientData, setPatientData] = useState();
 if (location.pathname ==="/patients"){
   return(
    <>
    <h1>Patients</h1>
    <PatientList/>
    </>
   );
  }
};

export default Patients;