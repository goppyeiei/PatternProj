var result = "";
var bmi = 0;
export const receive = (data) => {
  const nweight = Number(data.weight);
  const nheight = Number(data.height);
  bmi = nweight / (nheight / 100) ** 2;
  bmi = bmi.toFixed(2);
  //   console.log(bmi);
  underweight(bmi);
};

export const underweight = (bmi) => {
  if (bmi <= 18.5) {
    console.log("underweight");
    result = "Underweight";
  } else {
    normal(bmi);
  }
};

export const normal = (bmi) => {
  if (bmi <= 22.9) {
    console.log("normal");
    result = "Normal";
  } else {
    overweight(bmi);
  }
};

export const overweight = (bmi) => {
  if (bmi <= 29.9) {
    console.log("overweight");
    result = "Overweight";
  } else {
    obese(bmi);
  }
};
export const obese = () => {
  console.log("obese");
  result = "Obese";
};

export const sendbackres = () => {
  return result;
};
export const sendbackbmi = () => {
  return bmi;
};
