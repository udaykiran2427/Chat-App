export function formatRelativeTime(date) {
  const now = new Date();
  const messageTime = new Date(date);
  const diffMs = now - messageTime;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) {
    return "Just now";
  }
  if (diffMin < 60) {
    return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  }
  if (diffHour < 24) {
    return `${diffHour} hour${diffHour > 1 ? "s" : ""} ago`;
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (
    messageTime.getDate() === yesterday.getDate() &&
    messageTime.getMonth() === yesterday.getMonth() &&
    messageTime.getFullYear() === yesterday.getFullYear()
  ) {
    return "Yesterday";
  }
  return messageTime.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
