function sum(a, b) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


async function getRequest() {
    try {
        const response = await fetch('https://cnt-e1063cf9-c5be-481d-9df3-5622c64e0c32.containerhub.tripleten-services.com/api/v1/warehouses');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();