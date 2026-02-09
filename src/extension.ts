import * as vscode from 'vscode';

interface ButtonDefinition {
    id: string;
    command: string;
    args?: any;
}

// Predefined button configuration
const BUTTON_DEFINITIONS: ButtonDefinition[] = [
    { id: 'button0', command: 'workbench.action.tasks.runTask' },
    { id: 'button1', command: 'workbench.action.tasks.configureDefaultBuildTask' },
    { id: 'button2', command: 'workbench.action.tasks.build' },
    { id: 'button3', command: 'workbench.action.debug.selectandstart' },
    { id: 'button4', command: 'workbench.action.debug.start' },
    { id: 'button5', command: 'workbench.action.debug.run' }
];

export function activate(context: vscode.ExtensionContext) {
    console.log('Button in Terminal Panel extension is now active');

    // Register all button commands
    registerButtonCommands(context);
}

function registerButtonCommands(context: vscode.ExtensionContext) {
    BUTTON_DEFINITIONS.forEach((buttonDef) => {
        const commandId = `button-in-terminal-panel.${buttonDef.id}`;

        const disposable = vscode.commands.registerCommand(commandId, async () => {
            try {
                if (buttonDef.args !== undefined) {
                    await vscode.commands.executeCommand(buttonDef.command, buttonDef.args);
                } else {
                    await vscode.commands.executeCommand(buttonDef.command);
                }
            } catch (error) {
                vscode.window.showErrorMessage(
                    `Failed to execute command "${buttonDef.command}": ${error}`
                );
            }
        });

        context.subscriptions.push(disposable);
    });
}

export function deactivate() {
    // Clean up resources
}
