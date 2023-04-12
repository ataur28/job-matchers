import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





const Statistic = () => {
    const [mark, setMarks] = useState([]);

    useEffect(() => {

        axios.get('statistics.json')
            .then(data => {
                const loadedData = data.data;
                // console.log(loadedData)
                const assignmentMark = loadedData.map(mark => {
                    const assignmentInfo = {
                        name: mark.name,
                        mark: mark.mark
                    }
                    return assignmentInfo;
                })
                // console.log(assignmentMark);
                setMarks(assignmentMark);
            })

    }, [])

    return (
        <div>
            <div className='banner'>
                <h1 className='banner-title'>Statistic</h1>
            </div>
            <h3>Assignment Mark Area Chart</h3>
            {/* <BarChart width={1000} height={500} data={mark}>
                <Bar dataKey="mark" fill='#8884d8'></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart> */}
            <AreaChart
          width={1000}
          height={400}
          data={mark}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            
        </div>
    );
};

export default Statistic;