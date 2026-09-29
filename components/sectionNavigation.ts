export const sectionRoutes: Record<string, string> = {
  "/services": "services",
  "/projects": "projects",
  "/about": "about",
  "/workflow": "workflow",
};

export function goToSectionRoute(href: string) {
  const sectionId = sectionRoutes[href];
  if (!sectionId || typeof window === "undefined") return false;

  const section = document.getElementById(sectionId);
  if (!section) return false;

  window.history.pushState(null, "", href);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}
