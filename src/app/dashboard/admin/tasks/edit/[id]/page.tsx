"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, Card } from "@heroui/react";
import { toast } from "react-toastify";
import {Spinner} from "@heroui/react";
import { Priority, Status } from "@/types/createTask";
import { getSingleTask } from "@/app/lib/api/getSingleTask";
import { updateTask } from "@/app/lib/actions/updateTask";

const EditTask = () => {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [status, setStatus] = useState<Status>("Pending");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const task = await getSingleTask(id as string);

        setTaskName(task.taskName);
        setAssignedTo(task.assignedTo);
        setDueDate(task.dueDate);
        setPriority(task.priority);
        setStatus(task.status);
        setDescription(task.description);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load task");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTask();
    }
  }, [id]);


  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  if (
    !taskName || !assignedTo || !dueDate || !priority || !status || !description) {
    toast.error("Please fill in all fields.");
    return;
  }

  const updatedTask = {
    taskName,
    assignedTo,
    dueDate,
    priority,
    status,
    description,
  };

  try {
    const res = await updateTask(id as string, updatedTask);

    if (res.modifiedCount > 0) {
      toast.success("Task updated successfully");
      router.push("/dashboard/admin/tasks");
      router.refresh();
    } else {
      toast.info("No changes were made.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to update task.");
  }
};



  if (loading) {
    return (
      <div className="flex items-center gap-4">
      <Spinner />
    </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl py-10">
      <Card className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

        <div>
  <h2 className="text-3xl font-bold text-gray-900">Update Task</h2>

  <p className="mt-2 text-gray-500">
    Update the information below.
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
    <label className="mb-2 block text-sm font-semibold">
      Due Date
    </label>

    <input
      type="date"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-500"
    />
  </div>

  {/* Priority */}
  <div>
    <label className="mb-3 block text-sm font-semibold">
      Priority
    </label>

    <div className="flex flex-wrap gap-5">
      {["High", "Medium", "Low"].map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="radio"
            name="priority"
            value={item}
            checked={priority === item}
            onChange={(e) =>
              setPriority(e.target.value as Priority)
            }
            className="accent-blue-600"
          />

          {item}
        </label>
      ))}
    </div>
  </div>

  {/* Status */}
  <div>
    <label className="mb-2 block text-sm font-semibold">
      Status
    </label>

    <select
      value={status}
      onChange={(e) =>
        setStatus(e.target.value as Status)
      }
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
    Update Task
  </Button>
</form>

      </Card>
    </main>
  );
};

export default EditTask;