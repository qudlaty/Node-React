const express =require('express');
const app = express();

const port = 5000;

app.get('/api/customers', (req, res) => {
  //example hardcoded data
  const customers= [
    {id: 1, fname: 'Jo', lname:'Dee'  },
    {id: 2, fname: 'Jho', lname:'Fea'  }
  ];
  res.json(customers);
});

app.listen(port, () => 
console.log(`server started on port ${port}`));
