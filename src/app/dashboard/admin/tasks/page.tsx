import DeleteTaskButton from "@/app/components/dashboard/DeleteTaskButton";
import { getTasks } from "@/app/lib/api/tasks";
import { CreateTask } from "@/types/createTask";
import { Button } from "@heroui/react";
import Link from "next/link";

const Tasks = async () => {
  const tasks = await getTasks();

  return (
    <div className="space-y-6 ">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>

          <p className="mt-1 text-gray-500">Manage all tasks from one place.</p>
        </div>

        <Link href="/dashboard/admin/tasks/new" className="mr-23">
          <Button>+ Add Task</Button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="text-left text-sm font-semibold text-gray-700">
                <th className="px-6 py-4">Task</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task: CreateTask) => (
                <tr
                  key={task._id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  {/* Task Name */}
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {task.taskName}
                  </td>

                  {/* Assigned To */}
                  <td className="px-6 py-4 text-gray-600">{task.assignedTo}</td>

                  {/* Due Date */}
                  <td className="px-6 py-4 text-gray-600">{task.dueDate}</td>

                  {/* Priority */}
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold
                        ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-600"
                            : task.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                        }`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold
                        ${
                          task.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : task.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                    >
                      {task.status}
                    </span>
                  </td>

                  {/* Description */}
                  <td className="max-w-sm px-6 py-4 text-sm text-gray-600">
                    <p className="line-clamp-2">{task.description}</p>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link href={`/dashboard/admin/tasks/edit/${task._id}`}>
                        <Button size="sm">Edit</Button>
                      </Link>

                      <DeleteTaskButton id={task._id!} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {tasks.length === 0 && (
          <div className="py-12 text-center text-gray-500">No tasks found.</div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
