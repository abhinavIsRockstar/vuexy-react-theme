import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    id: "page2",
    title: "Page 2",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/page2",
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat",
  },
  {
    id: "forms",
    title: "Forms",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/forms",
  },
  {
    id: "tables",
    title: "Tables",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/tables",
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

export default horizontalMenuConfig
