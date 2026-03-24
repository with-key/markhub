const DATE_FORMATTER = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(value: string) {
  return DATE_FORMATTER.format(new Date(value));
}

export function formatTaskStatus(status: string) {
  const labels: Record<string, string> = {
    backlog: "Backlog",
    todo: "To do",
    "in progress": "In progress",
    done: "Done",
  };

  return labels[status] ?? status;
}

export function formatEpicStatus(status: string) {
  const labels: Record<string, string> = {
    planned: "Planned",
    active: "Active",
    completed: "Completed",
  };

  return labels[status] ?? status;
}
