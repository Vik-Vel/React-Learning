 function Message(){ //PascalCase for React component
    // Call this JavaScript XML
    //return <h1>Hello World</h1>;\

    const name = 'Viksi';
    if(name)
        return <h1>Hello {name}</h1>; // If we have a name 
    return <h1>Hello World</h1>; //else
    
 }

 export default Message;