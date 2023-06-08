import React from "react";
import Hero from "@/components/Hero";
import SideBarPC from "@/components/SideBarPC";
import Chart3Dim from "@/components/Chart3Dim";
import Image from "next/image";
import Link from "next/link";

const shaftStdData = [
  {
    znCode: "MDX-1 - 2 BOLT",
    znLb: "1.13 lb",
    znKg: "(0.51 kg)",
    alCode: "AMDX-1 - 2 BOLT",
    alLb: "0.44 lb",
    alKg: "(0.2 kg)",
    diaIn: '3/4"',
    diaMm: "(19 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-2 - 2 BOLT",
    znLb: "1.03 lb",
    znKg: "(0.47 kg)",
    alCode: "AMDX-2 - 2 BOLT",
    alLb: "0.4 lb",
    alKg: "(0.18 kg)",
    diaIn: '7/8"',
    diaMm: "(22 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-3 - 2 BOLT",
    znLb: "0.98 lb",
    znKg: "(0.44 kg)",
    alCode: "AMDX-3 - 2 BOLT",
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    diaIn: '1"',
    diaMm: "(25 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-4 - 2 BOLT",
    znLb: "0.86 lb",
    znKg: "(0.39 kg)",
    alCode: "AMDX-4 - 2 BOLT",
    alLb: "0.34 lb",
    alKg: "(0.15 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-5 - 2 BOLT",
    znLb: "1.17 lb",
    znKg: "(0.53 kg)",
    alCode: "AMDX-5 - 2 BOLT",
    alLb: "0.46 lb",
    alKg: "(0.21 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '2 3/8"',
    widMm: "(60 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-6 - 4 BOLT",
    znLb: "2.4 lb",
    znKg: "(1.09 kg)",
    alCode: "AMDX-6 - 4 BOLT",
    alLb: "0.94 lb",
    alKg: "(0.43 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-7 - 4 BOLT",
    znLb: "2.2 lb",
    znKg: "(1 kg)",
    alCode: "AMDX-7 - 4 BOLT",
    alLb: "0.86 lb",
    alKg: "(0.39 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(67 mm)",
  },

  {
    znCode: "MDX-8 - 4 BOLT",
    znLb: "2.53 lb",
    znKg: "(1.15 kg)",
    alCode: "AMDX-8 - 4 BOLT",
    alLb: "0.99 lb",
    alKg: "(0.45 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-8A - 4 BOLT",
    znLb: "2.01 lb",
    znKg: "(0.91 kg)",
    alCode: "AMDX-8A - 4 BOLT",
    alLb: "0.79 lb",
    alKg: "(0.36 kg)",
    diaIn: '1 7/8"',
    diaMm: "(48 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-9 - 4 BOLT",
    znLb: "2.01 lb",
    znKg: "(0.91 kg)",
    alCode: "AMDX-9 - 4 BOLT",
    alLb: "0.79 lb",
    alKg: "(0.36 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-9A - 4 BOLT",
    znLb: "6.48 lb",
    znKg: "(2.94 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "( kg)",
    diaIn: '2 1/8"',
    diaMm: "(54 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-10 - 4 BOLT",
    znLb: "6 lb",
    znKg: "(2.72 kg)",
    alCode: "AMDX-10 - 4 BOLT",
    alLb: "2.22 lb",
    alKg: "(1.01 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(102 mm)",
  },

  {
    znCode: "MDX-10A - 4 BOLT",
    znLb: "5.58 lb",
    znKg: "(2.53 kg)",
    alCode: "AMDX-10A - 4 BOLT",
    alLb: "2.18 lb",
    alKg: "(0.99 kg)",
    diaIn: '2 3/8"',
    diaMm: "(60 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-11 - 4 BOLT",
    znLb: "5.13 lb",
    znKg: "(2.33 kg)",
    alCode: "AMDX-11 - 4 BOLT",
    alLb: "2 lb",
    alKg: "(0.91 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-12 - 4 BOLT",
    znLb: "6.92 lb",
    znKg: "(3.14 kg)",
    alCode: "AMDX-12 - 4 BOLT",
    alLb: "2.7 lb",
    alKg: "(1.22 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-13 - 4 BOLT",
    znLb: "5.94 lb",
    znKg: "(2.69 kg)",
    alCode: "AMDX-13 - 4 BOLT",
    alLb: "2.32 lb",
    alKg: "(1.05 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-14 - 4 BOLT",
    znLb: "11.10 lb",
    znKg: "(5.03 kg)",
    alCode: "AMDX-14 - 4 BOLT",
    alLb: "4.34 lb",
    alKg: "(1.97 kg)",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-15 - 4 BOLT",
    znLb: "9.80 lb",
    znKg: "(4.45 kg)",
    alCode: "AMDX-15 - 4 BOLT",
    alLb: "3.83 lb",
    alKg: "(1.74 kg)",
    diaIn: '3 1/2"',
    diaMm: "(89 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-16 - 4 BOLT",
    znLb: "8.50 lb",
    znKg: "(3.86 kg)",
    alCode: "AMDX-16 - 4 BOLT",
    alLb: "3.15 lb",
    alKg: "(1.43 kg)",
    diaIn: '3 3/4"',
    diaMm: "(95 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(98 mm)",
  },

  {
    znCode: "MDX-17 - 4 BOLT",
    znLb: "14.40 lb",
    znKg: "(6.53 kg)",
    alCode: "AMDX-17 - 4 BOLT",
    alLb: "5.54 lb",
    alKg: "(2.51 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-18 - 4 BOLT",
    znLb: "11.50 lb",
    znKg: "(5.22 kg)",
    alCode: "AMDX-18 - 4 BOLT",
    alLb: "4.6 lb",
    alKg: "(2.09 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-20 - 4 BOLT",
    znLb: "13 lb",
    znKg: "(5.9 kg)",
    alCode: "N/A",
    alLb: " lb",
    alKg: "( kg)",
    diaIn: '5 1/2"',
    diaMm: "(140 mm)",
    widIn: '7 1/2"',
    widMm: "(191 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },
];

const shaftHvyData = [
  {
    znCode: "MDX-0H - 2 BOLT",
    znLb: "1.26 lb",
    znKg: "(0.57 kg)",
    alCode: "AMDX-0H - 2 BOLT",
    alLb: "0.49 lb",
    alKg: "(0.22 kg)",
    diaIn: '1/2"',
    diaMm: "(13 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-4H - 4 BOLT",
    znLb: "1.60 lb",
    znKg: "(0.73 kg)",
    alCode: "AMDX-4H - 4 BOLT",
    alLb: "0.95 lb",
    alKg: "(0.43 kg)",
    diaIn: '1 1/8"',
    diaMm: "(29 mm)",
    widIn: '2 3/8"',
    widMm: "(60 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-5H - 4 BOLT",
    znLb: "2 lb",
    znKg: "(0.91 kg)",
    alCode: "AMDX-5H - 4 BOLT",
    alLb: "0.65 lb",
    alKg: "(0.29 kg)",
    diaIn: '1 1/4"',
    diaMm: "(32 mm)",
    widIn: '2 3/4"',
    widMm: "(70 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-6H - 4 BOLT",
    znLb: "3.31 lb",
    znKg: "(1.5 kg)",
    alCode: "AMDX-6H - 4 BOLT",
    alLb: "1.29 lb",
    alKg: "(0.59 kg)",
    diaIn: '1 3/8"',
    diaMm: "(35 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-7H - 4 BOLT",
    znLb: "3 lb",
    znKg: "(1.36 kg)",
    alCode: "AMDX-7H - 4 BOLT",
    alLb: "1.17 lb",
    alKg: "(0.53 kg)",
    diaIn: '1 1/2"',
    diaMm: "(38 mm)",
    widIn: '3 1/4"',
    widMm: "(83 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-8H - 4 BOLT",
    znLb: "4.05 lb",
    znKg: "(1.84 kg)",
    alCode: "AMDX-8H - 4 BOLT",
    alLb: "1.58 lb",
    alKg: "(0.72 kg)",
    diaIn: '1 3/4"',
    diaMm: "(44 mm)",
    widIn: '3 9/16"',
    widMm: "(90 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(86 mm)",
  },

  {
    znCode: "MDX-9H - 4 BOLT",
    znLb: "3.4 lb",
    znKg: "(1.54 kg)",
    alCode: "AMDX-9H - 4 BOLT",
    alLb: "1.33 lb",
    alKg: "(0.6 kg)",
    diaIn: '2"',
    diaMm: "(51 mm)",
    widIn: '3 9/16"',
    widMm: "(90 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(86 mm)",
  },

  {
    znCode: "MDX-10H - 4 BOLT",
    znLb: "8.7 lb",
    znKg: "(3.95 kg)",
    alCode: "AMDX-10H - 4 BOLT",
    alLb: "3.4 lb",
    alKg: "(1.54 kg)",
    diaIn: '2 1/4"',
    diaMm: "(57 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(102 mm)",
  },

  {
    znCode: "MDX-11H - 4 BOLT",
    znLb: "7.6 lb",
    znKg: "(3.45 kg)",
    alCode: "AMDX-11H - 4 BOLT",
    alLb: "2.97 lb",
    alKg: "(1.35 kg)",
    diaIn: '2 1/2"',
    diaMm: "(64 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(102 mm)",
  },

  {
    znCode: "MDX-12H - 4 BOLT",
    znLb: "13 lb",
    znKg: "(5.9 kg)",
    alCode: "AMDX-12H - 4 BOLT",
    alLb: "5.08 lb",
    alKg: "(2.3 kg)",
    diaIn: '2 3/4"',
    diaMm: "(70 mm)",
    widIn: '5 5/8"',
    widMm: "(143 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-13H - 4 BOLT",
    znLb: "9.2 lb",
    znKg: "(4.17 kg)",
    alCode: "AMDX-13H - 4 BOLT",
    alLb: "3.59 lb",
    alKg: "(1.63 kg)",
    diaIn: '3"',
    diaMm: "(76 mm)",
    widIn: '5"',
    widMm: "(127 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(102 mm)",
  },

  {
    znCode: "MDX-14H - 4 BOLT",
    znLb: "18 lb",
    znKg: "(8.16 kg)",
    alCode: "AMDX-14H - 4 BOLT",
    alLb: "7.03 lb",
    alKg: "(3.19 kg)",
    diaIn: '3 1/4"',
    diaMm: "(83 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-15H - 4 BOLT",
    znLb: "17 lb",
    znKg: "(7.71 kg)",
    alCode: "AMDX-15H - 4 BOLT",
    alLb: "6.64 lb",
    alKg: "(3.01 kg)",
    diaIn: '3 1/2"',
    diaMm: "(89 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-17H - 4 BOLT",
    znLb: "14.4 lb",
    znKg: "(6.53 kg)",
    alCode: "AMDX-17H - 4 BOLT",
    alLb: "5.63 lb",
    alKg: "(2.55 kg)",
    diaIn: '4"',
    diaMm: "(102 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-19H - 4 BOLT",
    znLb: "16 lb",
    znKg: "(7.26 kg)",
    alCode: "N/A",
    alLb: "4.6 lb",
    alKg: "(2.09 kg)",
    diaIn: '4 1/2"',
    diaMm: "(114 mm)",
    widIn: '6 3/4"',
    widMm: "(171 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(0 mm)",
  },
];

const shaftMetricData = [
  {
    znCode: "MDX-20MM - 2 BOLT",
    znLb: "0.75 lb",
    znKg: "(0.34 kg)",
    alCode: "AMDX-20MM - 2 BOLT",
    alLb: "0.29 lb",
    alKg: "(0.13 kg)",
    diaIn: '48/61"',
    diaMm: "(20 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '3 3/4"',
    cDiaMm: "(95 mm)",
  },

  {
    znCode: "MDX-25MM - 2 BOLT",
    znLb: "0.98 lb",
    znKg: "(0.44 kg)",
    alCode: "AMDX-25MM - 2 BOLT",
    alLb: "0.38 lb",
    alKg: "(0.17 kg)",
    diaIn: '61/62"',
    diaMm: "(25 mm)",
    widIn: '2 1/8"',
    widMm: "(54 mm)",
    cDiaIn: '2 1/8"',
    cDiaMm: "(54 mm)",
  },

  {
    znCode: "MDX-30MM - 4 BOLT",
    znLb: "1.75 lb",
    znKg: "(0.79 kg)",
    alCode: "AMDX-30MM - 4 BOLT",
    alLb: "0.68 lb",
    alKg: "(0.31 kg)",
    diaIn: '1 9/50"',
    diaMm: "(30 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '2 3/8"',
    cDiaMm: "(60 mm)",
  },

  {
    znCode: "MDX-35MM - 4 BOLT",
    znLb: "1.5 lb",
    znKg: "(0.68 kg)",
    alCode: "AMDX-35MM - 4 BOLT",
    alLb: "0.59 lb",
    alKg: "(0.27 kg)",
    diaIn: '1 19/50"',
    diaMm: "(35 mm)",
    widIn: '2 1/2"',
    widMm: "(64 mm)",
    cDiaIn: '2 1/2"',
    cDiaMm: "(64 mm)",
  },

  {
    znCode: "MDX-40MM - 4 BOLT",
    znLb: "4.45 lb",
    znKg: "(2.02 kg)",
    alCode: "AMDX-40MM - 4 BOLT",
    alLb: "1.74 lb",
    alKg: "(0.79 kg)",
    diaIn: '1 27/50"',
    diaMm: "(39 mm)",
    widIn: '3 9/16"',
    widMm: "(90 mm)",
    cDiaIn: '2 7/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-45MM - 4 BOLT",
    znLb: "4.05 lb",
    znKg: "(1.84 kg)",
    alCode: "AMDX-45MM - 4 BOLT",
    alLb: "1.58 lb",
    alKg: "(0.72 kg)",
    diaIn: '1 67/87"',
    diaMm: "(45 mm)",
    widIn: '3 9/16"',
    widMm: "(90 mm)",
    cDiaIn: '2 7/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-50MM - 4 BOLT",
    znLb: "3.65 lb",
    znKg: "(1.66 kg)",
    alCode: "AMDX-50MM - 4 BOLT",
    alLb: "1.43 lb",
    alKg: "(0.65 kg)",
    diaIn: '1 32/33"',
    diaMm: "(50 mm)",
    widIn: '3 9/16"',
    widMm: "(90 mm)",
    cDiaIn: '2 7/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-60MM - 4 BOLT",
    znLb: "5.6 lb",
    znKg: "(2.54 kg)",
    alCode: "AMDX-60MM - 4 BOLT",
    alLb: "2.19 lb",
    alKg: "(0.99 kg)",
    diaIn: '2 9/25"',
    diaMm: "(60 mm)",
    widIn: '4 1/4"',
    widMm: "(108 mm)",
    cDiaIn: '2 7/8"',
    cDiaMm: "(73 mm)",
  },

  {
    znCode: "MDX-70MM - 4 BOLT",
    znLb: "5.90 lb",
    znKg: "(2.68 kg)",
    alCode: "AMDX-70MM - 4 BOLT",
    alLb: "2.4 lb",
    alKg: "(1.09 kg)",
    diaIn: '2 19/25"',
    diaMm: "(70 mm)",
    widIn: '0"',
    widMm: "(0 mm)",
    cDiaIn: '0"',
    cDiaMm: "(0 mm)",
  },

  {
    znCode: "MDX-75MM - 4 BOLT",
    znLb: "6.10 lb",
    znKg: "(2.77 kg)",
    alCode: "AMDX-75MM - 4 BOLT",
    alLb: "2.38 lb",
    alKg: "(1.08 kg)",
    diaIn: '2 19/20"',
    diaMm: "(75 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '3 5/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-80MM - 4 BOLT",
    znLb: "8.2 lb",
    znKg: "(3.72 kg)",
    alCode: "AMDX-80MM - 4 BOLT",
    alLb: "3.2 lb",
    alKg: "(1.45 kg)",
    diaIn: '2 19/20"',
    diaMm: "(75 mm)",
    widIn: '4 3/4"',
    widMm: "(121 mm)",
    cDiaIn: '3 5/8"',
    cDiaMm: "(92 mm)",
  },

  {
    znCode: "MDX-85MM - 4 BOLT",
    znLb: "- lb",
    znKg: "(- kg)",
    alCode: "AMDX-85MM - 4 BOLT",
    alLb: "- lb",
    alKg: "(- kg)",
    diaIn: '0"',
    diaMm: "(0 mm)",
    widIn: '0"',
    widMm: "(0 mm)",
    cDiaIn: '0"',
    cDiaMm: "(0 mm)",
  },
];

const shaft = () => {
  return (
    <div>
      <Hero heading={"Shaft Anodes "} message={""} img={"bg-img2"} />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start pt-10 lg:py-20 w-[100%]">
        <SideBarPC />
        <article>
          <main>
            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
                  <th>C: THICKNESS</th>
                </tr>
                {shaftStdData.map((item, id) => (
                  <Chart3Dim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex">
              <div className="flex flex-col items-center lg:pr-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/244182575-a01fa7dc-a73a-46dd-949d-748e15c63df8.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
                {/* <p className="py-4">MDCT-3</p> */}
              </div>
              <div className="flex flex-col items-center lg:pl-10">
                <Image
                  src="https://user-images.githubusercontent.com/77664153/243854071-e0766baa-2355-408d-9601-a60e032f0ef6.png"
                  alt="picture of anode"
                  className="min-w-[80px]"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p>HEAVY SERIES</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
                  <th>C: THICKNESS</th>
                </tr>
                {shaftHvyData.map((item, id) => (
                  <Chart3Dim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th colSpan={6} className="py-8">
                    <h1>SHAFT</h1>
                    <p className="font-boldHeading text-2xl tracking-wider">
                      ANODE SPECIFICATIONS
                    </p>
                    <p>METRIC SERIES</p>
                  </th>
                </tr>
                <tr>
                  <th colSpan={3}>NOMINAL WEIGHT</th>
                  <th colSpan={7}>NOMINAL DIMENSIONS</th>
                </tr>
                <tr>
                  <th colSpan={2}>ITEM #</th>
                  <th>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div>lb</div>
                      <div className="px-2">(kg)</div>
                    </div>
                  </th>
                  <th>A: SHAFT DIAMETER</th>
                  <th>B: DIAMETER</th>
                  <th>C: THICKNESS</th>
                </tr>
                {shaftMetricData.map((item, id) => (
                  <Chart3Dim
                    key={id}
                    znCode={item.znCode}
                    znLb={item.znLb}
                    znKg={item.znKg}
                    alCode={item.alCode}
                    alLb={item.alLb}
                    alKg={item.alKg}
                    diaIn={item.diaIn}
                    diaMm={item.diaMm}
                    widIn={item.widIn}
                    widMm={item.widMm}
                    cDiaIn={item.cDiaIn}
                    cDiaMm={item.cDiaMm}
                    notes={item.notes}
                  />
                ))}
              </tbody>
            </table>

            <p className="text-center pb-4">
              For more Shaft Anodes, please see our{" "}
              <Link href="/products/pleasureCraft/mdg">MDG</Link> section.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
};

export default shaft;
