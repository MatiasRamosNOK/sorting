describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("swap deberia llamarse 'n*2' veces, osea 16", function () {
    spyOn(bubbleSort, "swap").and.callThrough();
    expect(bubbleSort([1, 2, 4, 3])).toEqual([1, 2, 3, 4]);
    expect(bubbleSort.swap.calls.count()).toEqual(16);
  });
});
