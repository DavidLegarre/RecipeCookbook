import React, { useState } from "react";

class IngredientManager {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    getIngredients() {
        return this.ingredients;
    }

    clearIngredients() { 
        this.ingredients = [];
    }
}

export default IngredientManager;