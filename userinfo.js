// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
// const names = ["Abigail", "Minta"];
// const modifiedNames = formatArrayStrings(["Abigail", "Minta"], processArray([1, 2]));
// console.log(createUserProfiles(names, modifiedNames));
// [
//   { id: 1, originalName: "Abigail", modifiedName: "abigail" },
//   { id: 2, originalName: "Minta", modifiedName: "MINTA" }
// ]
