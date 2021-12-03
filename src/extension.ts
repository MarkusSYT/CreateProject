// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CreateCode } from './functions';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "create-project" is now active!');
	let disposable = vscode.commands.registerCommand('create-project.newDotNet', () => {

		vscode.commands.executeCommand('dotnet new console test');
	});
	let disposable2 = vscode.commands.registerCommand('create-project.newDotNetWeb', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("dotnet new web");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
