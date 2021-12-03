import * as vscode from 'vscode';
import { CreateCode } from './functions';

export function activate(context: vscode.ExtensionContext) {

	console.log('Create-Project is successfully activated!');

	//C# and DotNet
	let cshap_console = vscode.commands.registerCommand('create-project.newDotNet', () => {

		vscode.commands.executeCommand('dotnet new console --force');
	});
	let csharp_asp_web = vscode.commands.registerCommand('create-project.newDotNetWeb', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("dotnet new web --force");
	});
	let csharp_asp_web_api = vscode.commands.registerCommand('create-project.newDotNetWebApi', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("dotnet new webapi --force");
	});
	//GO
	let go = vscode.commands.registerCommand('create-project.newGoWeb', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("go mod init project.local/code/");
	});
	//Python
	let python = vscode.commands.registerCommand('create-project.newPython', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("python -m venv venv");
	});
	//Java
	let java = vscode.commands.registerCommand('create-project.newJava', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("mvn package");
	});

}

export function deactivate() { }
