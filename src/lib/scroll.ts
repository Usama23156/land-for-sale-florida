export function scrollToInquiry() {
  const el = document.getElementById("inquiry");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
