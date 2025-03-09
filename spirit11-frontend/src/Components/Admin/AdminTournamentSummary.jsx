import React, { useEffect, useState } from "react";
import { backendSocket } from "../../constants/backendInfo";
import { useSelector } from "react-redux";

const AdminTournamentSummary = () => {
  /*
  const summary = {
    overallRuns: 45000,
    overallWickets: 320,
    highestRunScorer: { name: "Danushka Kumara", runs: 1200 },
    highestWicketTaker: { name: "Jeewan Thirimanne", wickets: 30 },
  };*/

  const {username, password} = useSelector((state) => state.loggedUser);

  const [summary, setSummary] = useState({})

  useEffect(()=> {
    loadSummary();
  },[])
  
  const loadSummary = () => {
    fetch(`${backendSocket}/admin/summary`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setSummary(data.data)
    });
  }  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tournament Summary</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold">Overall Runs</h2>
            <p className="text-3xl font-bold text-blue-700">{summary.overallRuns}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold">Overall Wickets</h2>
            <p className="text-3xl font-bold text-blue-700">{summary.overallWickets}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h2 className="text-xl font-semibold">Highest Run Scorer</h2>
            <p className="text-2xl font-bold text-green-700">
              {summary.highestRunScorer?.name} ({summary.highestRunScorer?.totalRuns} runs)
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h2 className="text-xl font-semibold">Highest Wicket Taker</h2>
            <p className="text-2xl font-bold text-green-700">
              {summary.highestWicketTaker?.name} ({summary.highestWicketTaker?.wickets} wickets)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminTournamentSummary;
