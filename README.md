Real-Time Data Display App
This project is a simple real-time data display application that receives and displays valid data saved by an emitter service. The data is displayed on a web page, along with a success rate for data transmission and decoding.

Files
index.html
This HTML file serves as the main entry point for the frontend application. It provides the structure for the webpage, including the title, headers, and data display container.

styles.css
This CSS file contains the styling rules for the webpage. It defines the visual appearance of elements such as fonts, colors, and layout.

script.js
This JavaScript file handles the real-time communication with the backend server using Socket.IO. It receives data from the server and dynamically updates the webpage to display the received data and success rate.

Usage
Make sure the backend emitter and listener services are running.
Open the index.html file in a web browser.
The webpage will display received data in real-time along with the success rate of data transmission and decoding.
Setup
No additional setup is required for the HTML, CSS, and JavaScript files. However, make sure to replace the Socket.IO connection URL in the script.js file with the actual URL of your listener service.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License.
