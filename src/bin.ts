#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { createApp } from './createApp';

const SUBCOMMANDS = ['create', 'init', 'version'];

program
  .name('arch-cli')
  .usage('[commands] [options]')
  .arguments('<cmd>')
  .action((cmd) => {
    if (SUBCOMMANDS.indexOf(cmd) === -1) {
      chalk.red('Invalid command...');
      program.help();
    }
  });
program
  .command('create <projectName> [destination]')
  .description('create a new project')
  .action((name) => {
    console.log('name', name);
    createApp(name);
  });

program.parse(process.argv);
