import { Command } from 'commander';

import { registerCommands } from './commands';
import { CLI_DESCRIPTION, CLI_NAME, CLI_VERSION } from './config/configurations';

const program = new Command();

program.name(CLI_NAME).description(CLI_DESCRIPTION).version(CLI_VERSION, '-v, --version');

registerCommands(program);

program.parse(process.argv);
