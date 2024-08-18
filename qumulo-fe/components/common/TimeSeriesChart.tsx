import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TimeSeriesChartProps {
  data: any[];
  title: string;
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc2" strokeDasharray="0" vertical={false} />
          <XAxis
            dataKey="date"
            stroke="#ccc2"
            tickFormatter={(tick = '') =>
              new Date(tick).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              })
            }
          />
          <YAxis stroke="#ccc2" axisLine={true} tickLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: '#5559', border: 'none' }}
            cursor={{ stroke: '#ccc5', strokeWidth: 1 }}
          />
          {/* Hide legend by omitting it */}
          <Line type="monotone" dataKey="read" stroke="#aa7edd" name="Read" dot={false} />
          <Line type="monotone" dataKey="write" stroke="#00a3ca" name="Write" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;
