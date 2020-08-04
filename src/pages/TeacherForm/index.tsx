import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
// import api from "../../services/api";

interface ConnectionsInterface {
  total: string;
}

function TeacherForm() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3030/connections");
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que voce quer dar aulas" />
    </div>
  );
}
export default TeacherForm;
