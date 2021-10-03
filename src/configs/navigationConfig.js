import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "page2",
    title: "Page 2",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2"
  },
  {
    id: "page2 (collapse)",
    title: "Page 2 (collapse)",
    type: "collapse",
    icon: <Icon.File size={20} />,
    permissions: ["mentor", "editor"],
    // navLink: "/page2(collapse)"
    children: [
      {
        id: "monthlyCourses",
        title: "Monthly Courses",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/admin/pages/course_management"
      },
    ]
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    icon: <Icon.Smile size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "forms",
    title: "Forms",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/forms"
  },
  {
    id: "tables",
    title: "Tables",
    type: "item",
    icon: <Icon.Tablet size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Tables"
  },
  {
    id: "reactselect",
    title: "ReactSelectExample",
    type: "item",
    icon: <Icon.Tablet size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/reactselect"
  },
]

export default navigationConfig
