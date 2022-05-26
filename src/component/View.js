import React from 'react'
import Navbar from './Navbar'

const View = () => {
    var studlist=[{
        "name":"lijo",
        "admissionNO":"123",
        "CGPA":"60.2"

    },
    {
        "name":"rahul",
        "admissionNO":"183",
        "CGPA":"61.2"

    },
    {
        "name":"liji",
        "admissionNO":"453",
        "CGPA":"71.2"

    },
    {
        "name":"manu",
        "admissionNO":"423",
        "CGPA":"80"

    },
    ]
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br></br>

        <table class="table table-success">
  <thead>
    <tr>
    <th scope="col">Name</th>
      <th scope="col">Adm.NO</th>
      <th scope="col">CGPA</th>
    </tr>
  </thead>
  {studlist.map((value,key)=>{
      return <tbody>
      <tr>
        <th scope="row">{value.name}</th>
        <td>{value.admissionNO}</td>
        <td>{value.CGPA}</td>
        
      </tr>
      </tbody>
  })}
  
</table>

        


            </div>
            </div>
        </div>



    </div>
  )
}

export default View