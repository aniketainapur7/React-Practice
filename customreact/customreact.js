function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props.prop);
    }
    container.appendChild(domElement);
}


const mainContainer = document.querySelector("#root")

const reactElement = {
    type:'a',
    props:{
        href: "http://google.com",
        target: "_blank"
    },
    children : "Visit Google.com"
}

customRender(reactElement,mainContainer);