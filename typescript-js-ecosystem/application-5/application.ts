import * as lightDesk from '@synesthesia-project/light-desk';

function buttonPressed() {
  console.log("The button was pressed!");
}

const desk = new lightDesk.LightDesk();

// Create the root "group" for your desk, which new components can be added to
const group = new lightDesk.Group();
desk.setRoot(group);

// Create a button that calls buttonPressed(),
const button = new lightDesk.Button("Hello World");
group.addChild(button);
button.addListener(buttonPressed);