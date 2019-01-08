export const initialState = {
  activeStep: 0,
  evaluationMaturaElectiveInputs2: false,
  evaluationMaturaElectiveInputs3: false,
  evaluationMaturaElectiveInputs: false,
  evaluationExtraFields2: false,
  evaluationExtraFields3: false,
  evaluationExtraFields: false,
  evaluationMaturaMathematicsLevel: 'A',
  evaluationMaturaCroatianLevel: 'A',
  evaluationMaturaEnglishLevel: 'A',
  evaluationExtraField1: '',
  evaluationExtraField2: '',
  evaluationExtraField3: '',
  evaluationMaturaCroatian: '',
  evaluationMaturaElective1: '',
  evaluationMaturaElective2: '',
  evaluationMaturaElective3: '',
  evaluationMaturaEnglish: '',
  evaluationMaturaMathematics: '',
  evaluationSchoolGrades: '',
  percentageFirstGrade: '',
  percentageFourthGrade: '',
  percentageExtraField1: '',
  percentageExtraField2: '',
  percentageExtraField3: '',
  percentageMaturaCroatian: '',
  percentageMaturaElective1: '',
  percentageMaturaElective2: '',
  percentageMaturaElective3: '',
  percentageMaturaEnglish: '',
  percentageMaturaMathematics: '',
  percentageSecondGrade: '',
  percentageThirdGrade: '',
  percentagesTotal: '',
  pointsMaturaCroatian: '',
  pointsMaturaElective1: '',
  pointsMaturaElective2: '',
  pointsMaturaElective3: '',
  pointsMaturaEnglish: '',
  pointsMaturaMathematics: '',
};

export const calculatePoints = (percentage, evaluation) => Math.round(percentage * evaluation / 10);
export const calculateMaturaPoints = (percentage, evaluation, maturaLevel) => Math.round(percentage * evaluation * 10 * (maturaLevel === 'A' ? 1.6 : 1) / 160);
export const calculatePercentages = (...args) => [...args].reduce((a, b) => parseFloat(a, 10) + parseFloat(b, 10), 0);
export const calculateTotalGradePoints = (percentagesTotal, evaluationSchoolGrades) => Math.round((percentagesTotal / 4).toFixed(2) / 5 * evaluationSchoolGrades * 10);
export const calculateTotalMaturaPoints = (...args) => [...args].reduce((a, b) => a + b, 0);

export const func3 = () => {
  // do stuff
};
export const func4 = () => {
  // do stuff
};
export const func5 = () => {
  // do stuff
};
