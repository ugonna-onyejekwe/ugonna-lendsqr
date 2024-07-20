import {
  Bank,
  BarChart,
  Briefcase,
  Clipboard,
  Coin,
  Fees,
  Guarantors,
  HandShake,
  Home,
  Loan,
  LoanRequest,
  PiggyBank,
  Scroll,
  Services,
  Slider,
  Transaction,
  UserCheck,
  UserSet,
  UserTimes,
  Users,
} from "../assets";

export const sidebarInfo: sidebarInfoTypes[] = [
  {
    heading: "switch oranization",
    links: [
      {
        name: "dashboard",
        icon: Home,
        link: "/",
      },
    ],
  },
  {
    heading: "customers",
    links: [
      {
        name: "users",
        icon: Users,
        link: "users",
      },
      {
        name: "guarantors",
        icon: Guarantors,
        link: "/",
      },
      {
        name: "loans",
        icon: Loan,
        link: "/",
      },
      {
        name: "decision modals",
        icon: HandShake,
        link: "/",
      },
      {
        name: "savings",
        icon: PiggyBank,
        link: "/",
      },
      {
        name: "loan requests",
        icon: LoanRequest,
        link: "/",
      },
      {
        name: "whitelist",
        icon: UserCheck,
        link: "/",
      },
      {
        name: "karma",
        icon: UserTimes,
        link: "/",
      },
    ],
  },
  {
    heading: "businesses",
    links: [
      {
        name: "organizations",
        icon: Briefcase,
        link: "/",
      },
      {
        name: "loan products",
        icon: LoanRequest,
        link: "/",
      },
      {
        name: "savings productions",
        icon: Bank,
        link: "/",
      },
      {
        name: "fees and charges",
        icon: Coin,
        link: "/",
      },
      {
        name: "transactions",
        icon: Transaction,
        link: "/",
      },
      {
        name: "services",
        icon: Services,
        link: "/",
      },
      {
        name: "service account",
        icon: UserSet,
        link: "/",
      },
      {
        name: "settlements",
        icon: Scroll,
        link: "/",
      },
      {
        name: "reports",
        icon: BarChart,
        link: "/",
      },
    ],
  },
  {
    heading: "settings",
    links: [
      {
        name: "preferences",
        icon: Slider,
        link: "/",
      },
      {
        name: "fees and pricings",
        icon: Fees,
        link: "/",
      },
      {
        name: "audit logs",
        icon: Clipboard,
        link: "/",
      },
    ],
  },
];
