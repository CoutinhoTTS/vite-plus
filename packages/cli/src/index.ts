import { cac } from 'cac';
import shell from 'shelljs';

const cli = cac('vp');

cli.command('dev', '');
cli.command('build', '');
cli.command('preview', '');
cli.command('lib', '');
cli.command('run', '');
cli.command('lint', '')
  .action(() => {
    shell.exec('./node_modules/.bin/oxlint');
  });
cli.command('fmt', '');
cli.command('test', '');
cli.command('bench', '');
cli.command('docs', '');
cli.command('publish', '');
cli.command('ui', '');

cli.help();

cli.version('0.0.0');

cli.parse();
