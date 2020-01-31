"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to ${chalk.red("generator-ts-monorepo")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: "monorepo"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    // Copy regular files
    this.fs.copy(
      this.templatePath("monorepo"),
      this.destinationPath(this.props.name)
    );

    // Copy dotfiles
    this.fs.copy(
      this.templatePath("monorepo/.*"),
      this.destinationPath(this.props.name)
    );

    // Copy .gitignore
    this.fs.copy(
      this.templatePath("monorepo/.gitignore.template"),
      this.destinationPath(this.props.name + "/.gitignore")
    );

    // Remove gitignore template
    this.fs.delete(
      this.destinationPath(this.props.name + "/.gitignore.template")
    );
  }

  install() {
    const projectDir = process.cwd() + "/" + this.props.name;
    process.chdir(projectDir);
    this.spawnCommandSync("git", ["init"]);
    this.spawnCommandSync("git", ["add", "--all"]);
    this.spawnCommandSync("git", ["commit", "-m", '"initial commit"']);
    this.yarnInstall();
  }
};
