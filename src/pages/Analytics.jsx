import React from 'react'
import {
BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import Navbar from '../components/Navbar';
import "./Analytics.css";

const Analytics = () => {

    const charData = [
        { name: 'Admin', posts: 5},
        { name: 'User', posts: 3},
        { name: 'Test', posts: 4},
        { name: 'Demo', posts: 2},
    ];

    const headers = [
        { label: 'Id', id: 'id' },
        { label: 'Title', id: 'title' },
        { label: 'Author', id: 'author' },
        { label: 'Date', id: 'createdAt' }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="analytics-page">
      <Navbar />
      <main className="analytics-main">
        <header className="analytics-header">
            <h1>Blog Analytics</h1>
            <p>Insights into your blog's performance and activity.</p>
        </header>

        <div className="charts-container">
            <div className="chart-card">
                <h3>Posts preview </h3>
                <div className="chart-wrapper">
                <ResponsiveContainer>
                    <BarChart data={charData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                            datakey="posts"
                            fill="#8884d8"
                            name="Number of Posts"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="chart-card">
            <h3>Distribution</h3>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie 
                            data={charData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="posts"
                            label
                            >

                                {charData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} 
                                />
                                ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>

        <div className="posts-table-section">
            <h3>All Posts</h3>
            <div className="table-wrapper">
                <table className="analytics-table">
                    <thead>
                            <tr>
                         {headers.map((header, index) => (  
                                <th>{header.label}</th>
                            ))}

                            </tr>
            
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>React Basics</td>
                            <td>admin</td>
                            <td>16/02/2026</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Undersatndung Hooks</td>
                            <td>user</td>
                            <td>15/02/2026</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript</td>
                            <td>test</td>
                            <td>14/02/2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button className="page-btn"> Previous </button>
                <button className="page-btn active"> 1 </button>
                <button className="page-btn"> 2 </button>
                <button className="page-btn"> 3 </button>
                <button className="page-btn"> Next </button>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Analytics
