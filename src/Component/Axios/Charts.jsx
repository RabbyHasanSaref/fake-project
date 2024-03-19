import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Charts = () => {
    const [phones, setPhones] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneDatas = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        phice: parseInt(phone.slug.split('-')[1])

                    }
                    return obj;
                })
                setPhones(phoneDatas)
                setLoader(false)
            })
    }, [])
    return (
        <div>
            <div className=" flex justify-center my-10 ">
              {
                loader &&   <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
              }
            </div>

            <h1 className="text-3xl font-bold text-center">Phone {phones.length}</h1>
            <BarChart
                width={1200}
                height={500}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="name" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
        </div >
    );
};

export default Charts;