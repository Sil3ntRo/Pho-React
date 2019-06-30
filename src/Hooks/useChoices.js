import {useState} from 'react'


export function useChoices(defaultChoices) {
    const [choices, setChoices] = useState(defaultChoices || getDefaultChoices())

    function checkChoices(index) {
        const newChoices = [...choices];
        newChoices[index].checked = !newChoices[index].checked;
        setChoices(newChoices)
    }

    return {
        checkChoices,
        choices
    }
}

const choicesList = [
   "Extra Rice Noodle",
    "Extra Meat (Note: Can only add meat already contained in item)",
    "Mint",
    "Cilantro"
];

function getDefaultChoices() {
    return choicesList.map(choice => ({
        name: choice,
        checked: false
    }));
}