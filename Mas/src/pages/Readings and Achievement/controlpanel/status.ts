export const Status = {
  running: "running",
  completed: "completed",
  failed: "failed",
} as const;

export type StatusType = (typeof Status)[keyof typeof Status];