import * as vscode from 'vscode';

export class CreateCode implements vscode.Disposable {

    private _terminal: vscode.Terminal;

    constructor() {
        this._terminal = vscode.window.createTerminal("Generate Code");
    }
    dispose() {
        throw new Error('Method not implemented.');
    }

    public executeCommandInTerminal(command: string): void {
        let isNewTerminal = false;
        if (this._terminal === null) {
            this._terminal = vscode.window.createTerminal("Generate Code");
            isNewTerminal = true;
        }
        this._terminal.sendText(command);
        this._terminal.show();
    }
}