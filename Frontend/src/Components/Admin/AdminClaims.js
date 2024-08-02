import React, { useEffect, useState } from 'react'
import PropertyInsuranceService from '../Service/PropertyInsuranceService'

const AdminClaimsPage = () => {

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await PropertyInsuranceService.adminClaimsget();
        console.log(res.data);
        setClaims(res.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>AdminClaimsPage
    <table className='table table-striped-columns table-bordered table-hover border-dark mt-lg-4'>
      <thead>
        <tr>
          <th>ID</th>
          <th>holderName</th>
          <th>email</th>
          <th>mobileNumber</th>
          <th>customerId</th>
          <th>policyId</th>
          <th>propertyValue</th>
          <th>witnessStatement</th>
          <th>repairEstimates</th>
          <th>description</th>
          <th>dateOfIncident</th>
          <th>causeOfLoss</th>
          <th>address</th>
          <th>additionalDetails</th>
          <th>images</th>
          {/* Add more headers as necessary */}
        </tr>
      </thead>
      <tbody>
        {claims.map((claim,index) => (
          <tr key={claim.id}>
            <td>{index+1}</td>
            <td>{claim.holderName}</td>
            <td>{claim.email}</td>
            <td>{claim.mobileNumber}</td>
            <td>{claim.policyId}</td>
            <td>{claim.customerId}</td>
            <td>{claim.propertyValue}</td>
            <td>{claim.witnessStatement}</td>
            <td>{claim.repairEstimates}</td>
            <td>{claim.description}</td>
            <td>{claim.dateOfIncident}</td>
            <td>{claim.causeOfLoss}</td>
            <td>{claim.address}</td>
            <td>{claim.additionalDetails}</td>
            <td></td>
            
            {/* Add more cells as necessary */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdminClaimsPage