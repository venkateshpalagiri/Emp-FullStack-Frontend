import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData =[
        {
            "id":1,
            "firstName":"venky",
            "lastName":"palagiri",
            "email":"v@email.com"
        },
        {
            "id":2,
            "firstName":"john",
            "lastName":"jr",
            "email":"john@email.com"
        },
        {
            "id":3,
            "firstName":"elon",
            "lastName":"musk",
            "email":"elon@email.com"
        }
    ]

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
            </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>

                    </tr>
                )
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
