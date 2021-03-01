import getYesterDay from "./date";

test('get yesterday date format with YYYYMMDD', () => {
    expect(getYesterDay()).toBe(20210228)
});