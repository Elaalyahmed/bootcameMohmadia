// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get element with type assertion
    const inputElement = document.getElementById('myInput') as HTMLInputElement | null;
    
    if (inputElement) {
        inputElement.value = 'TypeScript works!';
        inputElement.style.border = '2px solid blue';
        inputElement.style.padding = '8px';
        inputElement.style.borderRadius = '4px';
        
        inputElement.addEventListener('input', (e) => {
            const target = e.target as HTMLInputElement;
            console.log('Current value:', target.value);
        });
        
        console.log('Input element successfully configured!');
    } else {
        console.error('Input element not found!');
    }
});