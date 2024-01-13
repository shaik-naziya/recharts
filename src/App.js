
import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, AreaChart, Area, BarChart,Bar} from 'recharts';

const ldata = [
  {
    brand: "Dell",
    model: 3,
    price: 80000
},
  {
    brand: "Lenevo",
    model: 5,
    price: 63000
},
  {
    brand: "Hp",
    model: 9,
    price: 5000
},
  {
    brand: "Intel",
    model: 4,
    price: 72000
},
  {
    brand: "Realme",
    model: 2,
    price: 10000
},
]
function App() {
  return (
    <>
    <h1 className='chart-heading'>Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={ldata} width={400} height={250} margin={{top: 5, right: 300, left: 20, bottom:5}}>
        <CartesianGrid strokeDasharray="5 5"/>
        <XAxis dataKey="model" interval={'preserveStartEnd'} />
        <YAxis />
        <Legend />
        <Tooltip contentStyle={{ backgroundColor:'purple'}} />
        <Line type="monotone" dataKey="price" stroke='red' activeDot={{ r:10}}/>
        <Line type="monotone" dataKey="brand" stroke='green' activeDot={{ r:10}}/>
      </LineChart>
    </ResponsiveContainer>


    <h1 className='chart-heading'>Area Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart data={ldata} width={400} height={250} margin={{top: 5, right: 300, left: 20, bottom:5}}>
        <CartesianGrid strokeDasharray="5 5"/>
        <XAxis dataKey="model" interval={'preserveStartEnd'} />
        <YAxis />
        <Legend />
        <Tooltip contentStyle={{ backgroundColor:'purple'}} />
        <Area type="monotone" dataKey="brand" fill='red' activeDot={{ r:10}}/>
        <Area type="monotone" dataKey="price" fill='green' activeDot={{ r:10}}/>
      </AreaChart>
    </ResponsiveContainer>


    <h1 className='chart-heading'>Bar Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart data={ldata} width={400} height={250} margin={{top: 5, right: 300, left: 20, bottom:5}}>
        <CartesianGrid strokeDasharray="5 5"/>
        <XAxis dataKey="model" interval={'preserveStartEnd'} />
        <YAxis />
        <Legend />
        <Tooltip contentStyle={{ backgroundColor:'purple'}} />
        <Bar dataKey="price" fill='red' activeDot={{ r:10}}/>
        <Bar dataKey="brand" fill='green' activeDot={{ r:10}}/>
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
