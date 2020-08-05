import React from "react";
import TeacherItem from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Arte" },
              { value: "Matemática", label: "Matemática" },
              { value: "Biologia", label: "Biologia" },
              { value: "Física", label: "Física" },
              { value: "História", label: "História" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Redação", label: "Redação" },
              { value: "Gramática", label: "Gramática" },
              { value: "Química", label: "Química" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "2", label: "Segunda-Feira" },
              { value: "1", label: "Terça-Feira" },
              { value: "2", label: "Quarta-Feira" },
              { value: "3", label: "Quinta-Feira" },
              { value: "4", label: "Sexta-Feira" },
              { value: "5", label: "Sabado" },
            ]}
          />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
export default TeacherList;
