import { NAME_LOCAL_STORAGE, STATUS_TASK } from '../utils/constants';
import { ITask } from '../utils/types/Task';
import { getLocalStorage } from '../utils/common';

type DataProps = {
	setTaskList: any;
};

const TodoOptionShow = ({ setTaskList }: DataProps) => {
	/**
	 * Function filter tasks with status
	 * @param task_status
	 * @returns
	 */
	const showTaskWithStatus = (task_status: any) => {
		const listTask = getLocalStorage(NAME_LOCAL_STORAGE) as ITask[];

		setTaskList(listTask.filter((task) => task.status === task_status));
	};

	return (
		<ul className="filters">
			<li>
				<a id="allWorks" href="#/" onClick={() => setTaskList(getLocalStorage(NAME_LOCAL_STORAGE))}>
					All
				</a>
			</li>
			<li>
				<a href="#active" id="activedItems" onClick={() => showTaskWithStatus(STATUS_TASK.ACTIVE)}>
					Active
				</a>
			</li>
			<li>
				<a href="#completed" id="completedTodos" onClick={() => showTaskWithStatus(STATUS_TASK.COMPLETE)}>
					Completed
				</a>
			</li>
		</ul>
	);
};

export default TodoOptionShow;
