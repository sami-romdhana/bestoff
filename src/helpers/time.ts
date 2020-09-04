export function formatDuration(length: number): string {
  if (length < 0) {
    throw new Error("Negative number are not supported");
  }

  if (length < 60) {
    return Math.floor(length).toString().padStart(2, "0") + "s";
  }

  if (length < 3600) {
    return (
      Math.floor(length / 60)
        .toString()
        .padStart(2, "0") +
      "m" +
      formatDuration(length % 60)
    );
  }

  return Math.floor(length / 3600) + "h" + formatDuration(length % 3600);
}
