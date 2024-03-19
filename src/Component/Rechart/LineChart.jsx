import { LineChart as LineChr, Line,  XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        { student: 1, math: 85, english: 5, bangla: 0 },
        { student: 2, math: 78, english: 80, bangla: 85 },
        { student: 3, math: 92, english: 88, bangla: 90 },
        { student: 4, math: 70, english: 10, bangla: 75 },
        { student: 5, math: 88, english: 85, bangla: 82 },
        { student: 6, math: 95, english: 90, bangla: 92 },
        { student: 7, math: 81, english: 78, bangla: 80 },
        { student: 8, math: 9, english: 80, bangla: 75 },
        { student: 9, math: 84, english: 82, bangla: 88 },
        { student: 10, math: 90, english: 88, bangla: 100 }
    ];


    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Line Chart </h1>
            <LineChr width={1200} height={500} data={studentData}>
                <XAxis dataKey="math"></XAxis>
                <YAxis dataKey="math"></YAxis>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="english" stroke="green"></Line>
                <Line dataKey="bangla"></Line>
            </LineChr>
        </div>
    );
};

export default LineChart;