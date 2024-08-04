const canvas = new fabric.Canvas('canvas');

        // Function to add an image to the canvas
        function addImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (f) {
                    fabric.Image.fromURL(f.target.result, function (img) {
                        // Calculate the aspect ratio
                        const aspectRatio = img.width / img.height;
                        const desiredWidth = 150;
                        const desiredHeight = 150 / aspectRatio;

                        img.set({
                            left: 100,
                            top: 100,
                            angle: 0,
                            padding: 0,
                            borderColor: 'red',
                            cornerColor: 'blue',
                            cornerStrokeColor: 'blue',
                            transparentCorners: false,
                            scaleX: desiredWidth / img.width,
                            scaleY: desiredHeight / img.height
                        });
                        canvas.add(img).setActiveObject(img);
                    });
                };
                reader.readAsDataURL(file);
            }
        }

        // Function to add a new text object to the canvas
        function addText() {
            const newText = new fabric.IText('New Text', {
                left: 50,
                top: 50,
                fontFamily: 'Arial',
                fill: '#000',
                fontSize: 20,
            });
            canvas.add(newText).setActiveObject(newText);
        }

        // Set up event listeners for toolbar controls
        document.getElementById('font-family').onchange = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('fontFamily', this.value);
                canvas.renderAll();
            }
        };

        document.getElementById('text-color').onchange = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('fill', this.value);
                canvas.renderAll();
            }
        };

        document.getElementById('bold-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('fontWeight', selectedObject.fontWeight === 'bold' ? 'normal' : 'bold');
                canvas.renderAll();
            }
        };

        document.getElementById('italic-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('fontStyle', selectedObject.fontStyle === 'italic' ? 'normal' : 'italic');
                canvas.renderAll();
            }
        };

        document.getElementById('underline-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('underline', !selectedObject.underline);
                canvas.renderAll();
            }
        };

        document.getElementById('left-align-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('textAlign', 'left');
                canvas.renderAll();
            }
        };

        document.getElementById('center-align-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('textAlign', 'center');
                canvas.renderAll();
            }
        };

        document.getElementById('right-align-btn').onclick = function () {
            const selectedObject = canvas.getActiveObject();
            if (selectedObject && selectedObject.type === 'i-text') {
                selectedObject.set('textAlign', 'right');
                canvas.renderAll();
            }
        };

        // Add event listener for adding text
        document.getElementById('add-text-btn').onclick = addText;

        // Delete selected object
        document.getElementById('delete-btn').onclick = function () {
            const activeObject = canvas.getActiveObject();
            if (activeObject) {
                canvas.remove(activeObject);
            }
        };

        // Function to handle keyboard movement
        function moveObjectWithKeyboard(event) {
            const activeObject = canvas.getActiveObject();
            if (activeObject) {
                switch (event.key) {
                    case 'ArrowUp':
                        activeObject.top -= 5;
                        break;
                    case 'ArrowDown':
                        activeObject.top += 5;
                        break;
                    case 'ArrowLeft':
                        activeObject.left -= 5;
                        break;
                    case 'ArrowRight':
                        activeObject.left += 5;
                        break;
                }
                activeObject.setCoords();
                canvas.renderAll();
            }
        }

        // Add keyboard event listener
        document.addEventListener('keydown', moveObjectWithKeyboard);

        // Add event listener for file input
        document.getElementById('fileInput').addEventListener('change', addImage);