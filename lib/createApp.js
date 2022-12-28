"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const ora_1 = __importDefault(require("ora"));
const inquirer_1 = __importDefault(require("inquirer"));
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const createApp = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
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
    const answer = yield inquirer_1.default.prompt(question);
    if ((answer === null || answer === void 0 ? void 0 : answer.appType) === 'PC') {
        const spinner = (0, ora_1.default)({
            spinner: 'soccerHeader',
            prefixText: `loading ${answer === null || answer === void 0 ? void 0 : answer.appType} template`,
        });
        spinner.start('正在下载模板...');
        (0, download_git_repo_1.default)('harry118/typescript-react-template', `${process.cwd()}/${projectName}`, function (err) {
            if (!err) {
                spinner.succeed('下载成功,😁');
                // changePackageJson(`${process.cwd()}/${projectName}`, projectName);
            }
            else {
                return spinner.fail('下载失败😭,确保你的网络连接正常,能访问github.com');
            }
        });
    }
});
exports.createApp = createApp;
