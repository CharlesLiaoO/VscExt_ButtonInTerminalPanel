// Simple debugging test
function sayHello(name) {
    const message = `Hello, ${name}!`;  // Set a breakpoint here
    return message;
}

function main() {
    console.log("🚀 Starting debug...");

    const greeting = sayHello("World");  // Set a breakpoint here

    console.log(greeting);
    console.log("✅ Debug complete!");
}

main();