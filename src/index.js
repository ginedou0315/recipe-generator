function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user_instruction");
  apiKey = "e430a0b40t5635ffab9bc012406aa3ao";
  let context =
    "You are an AI with a lot of knowledge in cooking. You can generate simple recipes from the ingredients given by the user. The recipes will have minumim 5 ingredients. The recipe must be written in HTML format. Do not write HTML at the beginning. Sign `Chef AI 👩‍🍳` in bold Font at the end of the recipe.";
  let prompt = `User's Instruction: Generate a simple but tasteful recipe that can be easily found in the kitchen about ${instructionInput.value}. Make sure the main ingredients is the User Instruction.`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe_generator");
recipeFormElement.addEventListener("submit", generateRecipe);
