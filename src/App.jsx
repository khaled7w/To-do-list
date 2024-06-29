import { useState } from 'react';
import CreateProject from './assets/Components/CreateProject';
import Main from './assets/Components/Main';
import Form from './assets/Components/Form';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [projects, setProjects] = useState([
    {
      name: 'React',
      date: '2024-02-17',
      description: 'I am Learning',
      tasks: ['task1', 'task2'],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);

  function saveHanlder() {
    if (name.length < 4 || description.length < 4 || date.length < 4) {
      alert('Invalid Input');
      return;
    }
    const newProject = {
      name: name,
      description: description,
      date: date,
      tasks: [],
    };
    setProjects((projects) => [...projects, newProject]);

    setName('');
    setDescription('');
    setDate('');
    setIsOpen(false);
  }

  function selectHandler(selectedPro) {
    setSelectedProject(selectedPro);
  }

  function tasksHandler(newTask) {
    if (selectedProject) {
      const updatedProjects = projects.map((project) =>
        project.name === selectedProject.name
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project
      );
      setProjects(updatedProjects);
      setSelectedProject({
        ...selectedProject,
        tasks: [...selectedProject.tasks, newTask],
      });
    }
  }

  function deleteProjectHandler(projectName) {
    setProjects((projects) =>
      projects.filter((project) => project.name !== projectName)
    );
    setSelectedProject(null);
  }

  function clearTaskHandler(taskName) {
    if (selectedProject) {
      const updatedTasks = selectedProject.tasks.filter(
        (task) => task !== taskName
      );
      const updatedProjects = projects.map((project) =>
        project.name === selectedProject.name
          ? { ...project, tasks: updatedTasks }
          : project
      );
      setProjects(updatedProjects);
      setSelectedProject({ ...selectedProject, tasks: updatedTasks });
    }
  }

  return (
    <div>
      <CreateProject
        onOpen={setIsOpen}
        projects={projects}
        onSelect={selectHandler}
      />
      {isOpen ? (
        <Form
          onOpen={setIsOpen}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          onSave={saveHanlder}
        />
      ) : (
        <Main
          onOpen={setIsOpen}
          selectedProject={selectedProject}
          onDeleteProject={deleteProjectHandler}
          onAddTasks={tasksHandler}
          onClearTask={clearTaskHandler}
          tasks={selectedProject ? selectedProject.tasks : []}
        />
      )}
    </div>
  );
}

export default App;
