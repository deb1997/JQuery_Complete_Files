let carBrands=[{carId:1,name:'Maruthi Suzuki'},
    {carId:2,name:'Suzuki NEXA'},
    {carId:3,name:'Hyndai Motors'}];
let carModels=[{carId:1,id:1,name:'Swift'},{carId:1,id:2,name:'Dezire'},
    {carId:1,id:3,name:'Brezza'},{carId:1,id:4,name:'Wagnor'},
    {carId:2,id:5,name:'Baleno'},{carId:2,id:6,name:'Ignis'},
    {carId:2,id:7,name:'Ciaz'},{carId:2,id:8,name:'SCross'},
    {carId:3,id:9,name:'Creta'},{carId:3,id:10,name:'Grand i20'},
    {carId:3,id:11,name:'Verna'},{carId:3,id:12,name:'Grand i10'}];

let brandSelectBox = $('#brand');
let modelSelectBox = $('#model');

// Display Car Brands
let carBrandOptions = `<option>Select a Car</option>`;
for(let brand of carBrands){
    carBrandOptions += `<option value="${brand.carId}">${brand.name}</option>`
}
brandSelectBox.empty().append(carBrandOptions);

// Event Listener for Brand Select Box
brandSelectBox.change(function() {
    let selectedBrandId = Number(brandSelectBox.val());
    let selectedModels = carModels.filter((model) => {
        return model.carId === selectedBrandId;
    });
    console.log(selectedModels);
    let modelOptions = `<option>Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option>`;
    }
    modelSelectBox.empty().append(modelOptions);
});
