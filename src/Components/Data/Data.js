import React from 'react';


const Data = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Extn.',
        field: 'extn',
        sort: 'asc',
        width: 100
      },
      {
        label: "E-mail",
        field: 'email',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        name: 'Tiger',
        surname: 'Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320,800',
        extn: 5421,
        email: 't.nixon@datatables.net'
      },
      {
        name: 'Garrett',
        surname: 'Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170,750',
        extn: 8422,
        email: 'q.winters@datatables.net'
      },
      {
        name: 'Ashton',
        surname: 'Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86,000',
        extn: 1562,
        email: 'a.cox@datatables.net'
      },
      {
        name: 'Cedric',
        surname: 'Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433,060',
        extn: 6224,
        email: 'c.kelly@datatables.net'
      }
    ]
  };
}

export default Data;