import * as vscode from 'vscode';
import { CreateCode } from './functions';

export function activate(context: vscode.ExtensionContext) {

	console.log('Create-Project is successfully activated!');

	//C# and DotNet
	let cshap_console = vscode.commands.registerCommand('create-project.newDotNetConsole', () => {
		let c = new CreateCode();
		c.createProject("dotnet new console --force");
	});
	let csharp_asp_web = vscode.commands.registerCommand('create-project.newDotNetWeb', () => {
		let c = new CreateCode();
		c.createProject("dotnet new web --force");
	});
	let csharp_asp_web_api = vscode.commands.registerCommand('create-project.newDotNetWebApi', () => {
		let c = new CreateCode();
		c.createProject("dotnet new webapi --force");
	});
	//GO
	let go = vscode.commands.registerCommand('create-project.newGo', () => {
		let c = new CreateCode();
		c.createProject("go mod init project.local/code/");
		if (c.detectOperatingSystem() == "linux")
			c.executeCommandInTerminal("touch main.go")
		else if (c.detectOperatingSystem() == "windows")
			c.executeCommandInTerminal('copy nul "main.go"')
	});
	//Python
	let python = vscode.commands.registerCommand('create-project.newPython', () => {
		let c = new CreateCode();
		c.createProject("python -m venv venv");
		if (c.detectOperatingSystem() == "linux")
			c.executeCommandInTerminal("touch main.py")
		else if (c.detectOperatingSystem() == "windows")
			c.executeCommandInTerminal('copy nul "main.py"')
	});
	let jupyter = vscode.commands.registerCommand('create-project.newJupyter', () => {
		let c = new CreateCode();
		c.createProject("python -m venv venv");
		if (c.detectOperatingSystem() == "linux")
			c.executeCommandInTerminal("touch main.ipynb")
		else if (c.detectOperatingSystem() == "windows")
			c.executeCommandInTerminal('copy nul "main.ipynb"')
	});
	let django = vscode.commands.registerCommand('create-project.newDjango', () => {
		let c = new CreateCode();
		c.executeCommandInTerminal("python -m venv venv")
		c.createProject("django-admin startproject code");
	});
	//Java
	let java = vscode.commands.registerCommand('create-project.newJava', () => {
		let c = new CreateCode();
		c.createProject("mvn archetype:generate -DgroupId=local.code -DartifactId=code -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false");
	});
}

export function deactivate() { }
