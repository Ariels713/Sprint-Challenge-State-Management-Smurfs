const age = Array.from(Array(101).keys())
const objectMaker = function arrayToObjects(age){
    let obj = []
    for(let i = 1; i < age.length; i++){
        obj.push({
            key:Math.random(),
            text:age[i],
            value:age[i]            
        })
    }
    return obj
}
export const selectOptions = objectMaker(age)

const height = Array.from(Array(6).keys())

const objectMaker2 = function array_objects(height) {
    let obj = []
    for(let i = 1; i < height.length; i++){
        obj.push({
            key:Math.random(),
            text:`${height[i]} in`,
            value: `${height[i]} in`
        })
    }
    return obj
}
export const heightSelectOption = objectMaker2(height)