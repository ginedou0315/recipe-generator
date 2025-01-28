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
    "You are a Professional Chef AI with a lot of knowledge in baking and cooking. You can generate simple recipes or search for recipes from any ingredients given by the user. Your recipes will have minumim 5 ingredients. The recipe must be written in HTML format. Do not write HTML at the beginning. Make sure all text color for recipe and title is the same. Sign `Chef AI 👩‍🍳` in bigger bold Font and color purple at the end of the recipe.";
  let prompt = `User's Instruction: Generate a simple but tasteful recipe that can be easily found in the kitchen about ${instructionInput.value}. Make sure the main ingredients is the User Instruction.`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">🪄🪄🪄Concocting the best recipes with ${instructionInput.value}...</div>`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe_generator");
recipeFormElement.addEventListener("submit", generateRecipe);
