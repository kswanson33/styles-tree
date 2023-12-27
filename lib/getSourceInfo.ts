export const getSourceInfo = (sourceObj: any) => {
  sourceObj.file = sourceObj.file.replace('.js', '.ts').replace('/code', '..')
  return sourceObj;
}
