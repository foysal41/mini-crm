"use client";

import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import { toast } from "react-toastify";
import { createTask } from "@/app/lib/actions/tasks";
import { Priority, Status } from "@/types/createTask";
import { useRouter } from "next/navigation";
import { useSession } from "@/app/lib/auth-client";

const NewTask = () => {
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [status, setStatus] = useState<Status>("Pending");
  const [description, setDescription] = useState("");
  const { data: session } = useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !taskName ||
      !assignedTo ||
      !dueDate ||
      !priority ||
      !status ||
      !description
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    const taskData = {
      taskName,
      assignedTo,
      dueDate,
      priority,
      status,
      description,
      createdBy: user?.name,
      createdByEmail: user?.email,
      role: user?.role,
    };

    const res = await createTask(taskData);

    if (res.insertedId) {
      toast.success("Task posted successfully");
      // Reset Form
      setTaskName("");
      setAssignedTo("");
      setDueDate("");
      setPriority("Medium");
      setStatus("Pending");
      setDescription("");
      router.push("/dashboard/admin/tasks");
    }
  };

  return (
    <main className="mx-auto max-w-3xl py-10">
      <Card className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Create New Task</h2>

          <p className="mt-2 text-gray-500">
            Fill in the information below to create a new task.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Task Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Task Name
            </label>

            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Assigned To */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Assigned To
            </label>

            <input
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Employee name"
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold">Due Date</label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="mb-3 block text-sm font-semibold">Priority</label>

            <div className="flex flex-wrap gap-5">
              {["High", "Medium", "Low"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="priority"
                    value={item}
                    checked={priority === item}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    className="accent-blue-600"
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-semibold">Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write task details..."
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#2F96EE] text-white"
          >
            Create Task
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default NewTask;
