export function createApp() {
    const rootElement = document.createElement('div');
    rootElement.id = 'app';
    document.body.appendChild(rootElement);
}

export function removeApp() {
    const rootElement = document.getElementById('app');
    rootElement?.remove();
}

export function renderTitle(title: string) {
    const app = document.getElementById('app');
    app!.innerHTML = `
        <h1> ${title} </h1>
    ` 
}