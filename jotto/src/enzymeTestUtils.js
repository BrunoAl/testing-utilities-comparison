/**
 * Return node(s) with the given data-testid attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-testid attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-testid="${val}"]`)
