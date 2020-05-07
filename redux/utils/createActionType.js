export default function createActionType(currentType, success = true) {
  return success ? `${currentType}_SUCCESS` : `${currentType}_ERROR`;
}
