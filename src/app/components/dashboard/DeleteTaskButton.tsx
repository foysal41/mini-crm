"use client";

import { deleteTask } from "@/app/lib/api/taskDelete";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

const DeleteTaskButton = ({ id }: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    console.log("Delete button clicked");
  console.log("Task ID:", id);

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteTask(id);

      if (data.deletedCount > 0) {
        toast.success("Task deleted successfully");
        router.refresh();
      } else {
        toast.error("Failed to delete task");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Button style={{ color: "red", backgroundColor: "transparent", }} size="sm" onPress={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteTaskButton;
