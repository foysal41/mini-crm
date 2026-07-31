export type Priority = "High" | "Medium" | "Low";

export type Status = "Pending" | "In Progress" | "Completed";

export interface CreateTask {
  taskName: string;
  assignedTo: string;
  dueDate: string;
  priority: Priority;
  status: Status;
  description: string;
}