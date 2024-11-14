```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: The HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: The JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser -->> server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -->> browser : The HTML document with the updated json file
    deactivate server

    browser -->> server : POST [{ "content": {Text Input}, "date": Date()}]
    activate server
    server -->> browser : GET https://studies.cs.helsinki.fi/exampleapp/spa
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes with addition to the new notes added
```
