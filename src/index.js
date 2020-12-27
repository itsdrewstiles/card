"use strict";

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderColor: "white",
  borderStyle: "classic",
  float: "center",
};

// Put all our output together into a single variable so we can use boxen effectively
const output = [
  `Hello World, I'm ${chalk.bold("Meraj")}!\n`,
  chalk.bold("Full Stack & DevOps Engineer"),
  `${chalk.bold("Skills")}: ${[
    "GNU/Linux",
    "C",
    "Bash",
    "PHP",
    "Python",
    "Node.js",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "React",
    "Relay",
    "Redux",
    "GraphQL",
    "Autotools",
    "CMake",
    "Meson",
  ]
    .reduce((acc, item, idx) => {
      const chunkIndex = Math.floor(idx / 6);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(item);

      return acc;
    }, [])
    .map((chunk) => chunk.join(", "))
    .join("\n        ")}`,
  "\n",
  [
    "GitHub    : https://github.com/merajsahebdar/",
    "Instagram : https://instagram.com/merajsahebdar/",
    "Twitter   : https://twitter.com/merajsahebdar/",
    "LinkedIn  : https://linkedin.com/in/merajsahebdar/",
  ]
    .map((item) => {
      return item;
    })
    .join("\n"),
].join("\n");

fs.writeFileSync(
  path.join(__dirname, "..", "bin", "output"),
  chalk.white(boxen(output, options))
);
