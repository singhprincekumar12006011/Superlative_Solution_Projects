const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "Components", type: "label" },
  {
    name: "Masters",
    icon: "favorite",
    // badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Company master", path: "/material/autocomplete", iconText: "A" },
      { name: "Product Master", path: "/material/checkbox", iconText: "C" },
      { name: "Party Master", path: "/material/dialog", iconText: "D" },
      { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
      { name: "Form", path: "/material/form", iconText: "F" },
      { name: "Icons", path: "/material/icons", iconText: "I" },
      { name: "Menu", path: "/material/menu", iconText: "M" },
      { name: "Progress", path: "/material/progress", iconText: "P" },
      { name: "Radio", path: "/material/radio", iconText: "R" },
      { name: "Switch", path: "/material/switch", iconText: "S" },
      { name: "Slider", path: "/material/slider", iconText: "S" },
      { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
      // { name: "Table", path: "/material/table", iconText: "T" }
    ]
  },
  { label: "PAGES", type: "label" },
  {
    name: "Transition ",
    // icon: "trending_up",
    children: [{ name: "Production Entry", path: "/material/table", iconText: "E" }]
  },
  {
    name: "Reports",
    // icon: "launch",
    type: "extLink",
    children: [{ name: "Invoice", path: "/material/buttons", iconText: "B" } ]
  },
  { label: "Security", type: "label" },
  {
    name: "USER",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
];

export default navigations;
