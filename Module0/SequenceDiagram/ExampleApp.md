```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: POST [{ "content": {Text Input}, "date": Date()}]
    activate server
    deactivate server

    browser -->> server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -->> browser : [{ "content": {Text Input}, "date": {Date()} }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes with addition to the new notes added