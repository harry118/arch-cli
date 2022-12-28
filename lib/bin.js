#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const createApp_1 = require("./createApp");
const SUBCOMMANDS = ['create', 'init', 'version'];
commander_1.program
    .name('arch-cli')
    .usage('[commands] [options]')
    .arguments('<cmd>')
    .action((cmd) => {
    if (SUBCOMMANDS.indexOf(cmd) === -1) {
        chalk_1.default.red('Invalid command...');
        commander_1.program.help();
    }
});
commander_1.program
    .command('create <projectName> [destination]')
    .description('create a new project')
    .action((name) => {
    console.log('name', name);
    (0, createApp_1.createApp)(name);
});
commander_1.program.parse(process.argv);
