import ora from 'ora';
import inquirer from 'inquirer';
import download from 'download-git-repo';

const createApp = async (projectName: string) => {
  const question = [
    {
      type: 'list',
      name: 'appType',
      message: '你想创建什么类型的项目?',
      choices: [
        { name: 'PC', value: 'PC' },
        { name: 'H5(未完成)', value: 'H5' },
      ],
    },
  ];
  const answer = await inquirer.prompt(question);

  if (answer?.appType === 'PC') {
    const spinner = ora({
      spinner: 'soccerHeader',
      prefixText: `loading ${answer?.appType} template`,
    });
    spinner.start('正在下载模板...');
    download(
      'harry118/typescript-react-template',
      `${process.cwd()}/${projectName}`,
      function (err: any) {
        if (!err) {
          spinner.succeed('下载成功,😁');
          // changePackageJson(`${process.cwd()}/${projectName}`, projectName);
        } else {
          return spinner.fail(
            '下载失败😭,确保你的网络连接正常,能访问github.com'
          );
        }
      }
    );
  }
};

export { createApp };
