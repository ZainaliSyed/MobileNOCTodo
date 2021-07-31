interface ITodo {
  id: number;
  title: string;
  body: string;
}

type TodoState = {
  todoNoclist: ITodo[];
};

type TodoAction = {
  type: string;
  todo: ITodo;
};

type DispatchType = (args: TodoAction) => TodoAction;
