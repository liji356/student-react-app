import React, { useState } from 'react'
import Navbar from './Navbar'

const Addstud = () => {

    var[name,setname]=useState("")
    var[Admin,setAdmin]=useState("")
    var[cgpa,setcgpa]=useState("")

    const newstud=(()=>{
        const data={"name":name,"Admin":Admin,"cgpa":cgpa}
        console.log(data)
    })
  return (
    <div>
        <Navbar/>

        <div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(x)=>{setname(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(x)=>{setAdmin(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(x)=>{setcgpa(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newstud} className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Addstud