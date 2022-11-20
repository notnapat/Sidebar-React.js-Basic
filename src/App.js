// 1.1Sidebar ลองทำ 1.2 ก่อน  บางทีทำ 1.2 แล้ว 1.1 จะขึ้นมา อัตโนมัติ 
// 3 browser, router, route
// 4.3 Overview
// 4.7 Reports, One, Two, Three
// 4.10 Team
import './App.css';
// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
// import {Switch, Route} from "react-router-dom"
// import Switch from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

// 4.4 Router,  Route
// 4.8 Reports, One, Two, Three

function App() {
    // 1.2 Sidebar
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    {/* <Route path="/" element={<Sidebar />}>
                        <Route path="/overview" exact element={<Overview />} />
                        <Route path="/reports" exact element={<Reports />} />
                        <Route path="/reports/reports1" exact element={<ReportsOne />} />
                        <Route path="/reports/reports2" exact element={<ReportsTwo />} />
                        <Route path="/reports/reports3" exact element={<ReportsThree />} />
                        <Route path="/team" exact element={<Team />} />
                    </Route> */}

                    {/* <Route path="/" element={<Sidebar />} >
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/reports" element={Reports } />
                        <Route path="/reports/reports1" element={ReportsOne } />
                        <Route path="/reports/reports2" element={<ReportsTwo />} />
                        <Route path="/reports/reports3" element={<ReportsThree />} />
                        <Route path="/team" element={<Team />} />
                    </Route> */}

                    <Route path="/" element={<Sidebar />} >
                        <Route exact path="/overview" element={<Overview>wefwefaw</Overview>} />
                        <Route exact path="/reports" element={Reports} />
                        <Route exact path="/reports/reports1" element={<ReportsOne>aaa</ReportsOne>} />
                        <Route exact path="/reports/reports2" element={<ReportsTwo />} />
                        <Route exact path="/reports/reports3" element={<ReportsThree />} />
                        <Route exact path="/team" element={<Team />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
