export function timeConverter(isoTime) {
  return new Date(isoTime).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
