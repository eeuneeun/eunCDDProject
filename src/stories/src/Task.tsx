import React from "react";

type Task = {
  id: string;
  title: string;
  state: string;
};

export const Task: React.FC = () => {
  const [task, setTask] = React.useState<Task>();

  return (
    <div className="list-item">
      <input type="text" value={task?.title} readOnly={true} />
    </div>
  );
};
